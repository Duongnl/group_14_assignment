'use client'
import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function AppHeader() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand><Link href={"/"} className='navbar-brand'>NextJS With Bảo Lộc</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href={"/blogs"} className='nav-link'>Blogs</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="text-center mt-4 mb-4">Get User API</p>
    </>
  );
}

export default AppHeader;