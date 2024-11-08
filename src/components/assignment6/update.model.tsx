'use client'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate }  from 'swr';
interface IProps {
    showModelUpdate: boolean;
    setShowModelUpdate: (value: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}
function UpdateModel(props: IProps) {
    const { showModelUpdate, setShowModelUpdate, blog, setBlog } = props;

    const [id, setID] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");
    

    useEffect(()=>{
        if(blog && blog.id) {
            setID(blog.id);
            setTitle(blog.title);
            setAuthor(blog.author);
            setContent(blog.content);
        }
    }, [blog])

    const handleSubmitForm = () => {

        if(!title){
            toast.error("Not empty title!");
            return;
        }
        if(!author){
            toast.error("Not empty author!");
            return;
        }
        if(!content){
            toast.error("Not empty content!");
            return;
        }
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        }).then(res => res.json())
            .then(res => {
                if(res){
                    toast.info("Update blog succees! ");
                    handleCloseModel();
                    mutate("http://localhost:8000/blogs");
                }
            });
    }
    const handleCloseModel = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setBlog(null);
        setShowModelUpdate(false);
    }
    return (
        <>

            <Modal
                show={showModelUpdate}
                onHide={() => handleCloseModel()}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new blogs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="..."
                                value={title} onChange={(event) => { setTitle(event.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="..."
                                value={author} onChange={(event) => { setAuthor(event.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={content} onChange={(event) => { setContent(event.target.value) }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModel()}>
                        Close
                    </Button>
                    <Button variant="info" onClick={() => handleSubmitForm()}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModel;