'use client'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './sidebar';
import Link from "next/link";
import "@/styles/header.css"
const Header = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    return (
        <>
            <Container fluid className='header'>
                <Navbar expand="lg" className="bg-body-tertiary header" >
                    <Navbar.Brand>
                        <Button variant="light" onClick={() => { setShowSidebar(true) }}>
                            <i className="fa-solid fa-bars"></i>
                        </Button>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <Link href={"/"} className='link-nhom14' >
                        <i className="fa-solid fa-house"></i>  Nhóm 14
                        </Link>
                    </Navbar.Brand>







                </Navbar>
            </Container>

            <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />


        </>
    )
}

export default Header