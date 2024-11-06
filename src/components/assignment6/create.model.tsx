'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate }  from 'swr';
interface IProps {
    showModelCreate: boolean;
    setShowModelCreate: (value: boolean) => void;
}
function CreateModel(props: IProps) {

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const { showModelCreate, setShowModelCreate } = props;

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
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        }).then(res => res.json())
            .then(res => {
                if(res){
                    toast.success("Create new blog succees! ");
                    handleCloseModel();
                    mutate("http://localhost:8000/blogs");
                }
            });
    }
    const handleCloseModel = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModelCreate(false);
    }
    return (
        <>

            <Modal
                show={showModelCreate}
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
                    <Button variant="primary" onClick={() => handleSubmitForm()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModel;