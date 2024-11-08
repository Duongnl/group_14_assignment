'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateModel from './create.model';
import { useState } from 'react';
import UpdateModel from './update.model';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
interface IProps {
  blogs: IBlog[]
}
const AppContent = (props: IProps) => {

  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModelCreate, setShowModelCreate] = useState<boolean>(false) ;
  const [showModelUpdate, setShowModelUpdate] = useState<boolean>(false) ;

const handleDeleteBlog = (id: number) => {
  if(confirm(`Do you want to delete this blog (id = )${id}`)) {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
  }).then(res => res.json())
      .then(res => {
          if(res){
              toast.success("Delete blog succeed! ");
              // handleCloseModel();
              mutate("http://localhost:8000/blogs");
          }
      });
  }
}
  return (
    <>
      <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}>
        <h3>Table Blogs</h3>
        <Button variant='secondary' onClick={() => setShowModelCreate(true)}>Add new</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  
                    <Link className='btn btn-primary' href={`/assignment6/blogs/${item.id}`}>
                        View
                    </Link>
                  
                  <Button variant='warning' className='mx-3'
                    onClick={() =>{
                      setBlog(item);
                      setShowModelUpdate(true);
                    }}>Edit</Button>
                  <Button variant='danger' onClick={() => handleDeleteBlog(item.id)}>Delete</Button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </Table>
      <CreateModel showModelCreate = {showModelCreate}
                   setShowModelCreate = {setShowModelCreate}></CreateModel>

      <UpdateModel showModelUpdate={showModelUpdate}
        setShowModelUpdate={setShowModelUpdate}
        blog={blog}
        setBlog={setBlog}/>
    </>

  );
}

export default AppContent;