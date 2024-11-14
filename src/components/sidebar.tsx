'use client'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import '@/styles/sidebar.css'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
interface IProps {
    showSidebar: boolean;
    setShowSidebar: (value: boolean) => void
}

const Sidebar = (props: IProps) => {
    const { showSidebar, setShowSidebar } = props;

    const pathname = usePathname();
    const [name,setName] = useState<string[]>([pathname])
    useEffect (() => {
        setName([pathname]);
    },[pathname])

    console.log(name)
    


    return (
        <>
            <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="sidebar" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='link-nhom14' > <i className="fa-solid fa-book"></i> Bài tập</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link href={"/assignment1"} >
                        <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment1") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 1
                        </Button>
                    </Link>

                    <Link href={"/assignment2"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment2") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 2
                        </Button>
                    </Link>

                    <Link href={"/assignment3"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment3") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 3
                        </Button>
                    </Link>

                    <Link href={"/assignment4"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment4") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 4
                        </Button>
                    </Link>

                    <Link href={"/assignment5"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment5") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 5
                        </Button>
                    </Link>

                    <Link href={"/assignment6"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment6") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 6
                        </Button>
                    </Link>

                    <Link href={"/assignment7"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment7") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 7
                        </Button>
                    </Link>

                    <Link href={"/assignment8"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment8") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 8
                        </Button>
                    </Link>

                    <Link href={"/assignment9"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment9") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 9
                        </Button>
                    </Link>

                    <Link href={"/assignment10"} >
                    <Button
                            variant="light"
                            className={`btn-sidebar ${name.includes("/assignment10") ? "active" : ""}`}
                            onClick={() => setShowSidebar(false)}
                        >
                            Bài tập tuần 10
                        </Button>

                    </Link>







                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar