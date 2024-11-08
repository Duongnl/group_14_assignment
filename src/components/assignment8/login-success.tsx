"use client"
import { Button, Form } from "react-bootstrap"
import { signOut } from "next-auth/react"
import { toast } from "react-toastify"
interface IProps {
    userName: string
}

const LoginSuccess = (props: IProps) => {
    const { userName } = props

    const handleLogout = () => {
        signOut({ redirect: false })
        toast.success("Đăng xuất thành công")
    }


    return (<>

        <Form className="shadow p-4 bg-white rounded container-login__Form">
            <div className="h5 mb-2 text-center">Xin chào {userName}</div>

            <div  className="h5 mb-2 text-center btn-logout__div">
                <Button variant="outline-danger"
                    onClick={() => handleLogout()}><i className="fa-solid fa-right-from-bracket" > </i>  Đăng xuất</Button>
            </div>


        </Form>

    </>)
}

export default LoginSuccess