import Image from "next/image"
import { Form } from "react-bootstrap"
import "@/styles/login.css"

const HomePage = () => {
  return (
    <>
                <div className='container-login__div'>
            <Image className='background-image__Image'
                src="/images/background-home.jpg"
                alt="Picture of the author"
                fill // Tự động điều chỉnh kích thước
            />

            <Form className="shadow p-4 bg-white rounded container-login__Form">
                <div className="h4 text-center">Tổng hợp bài tập 10 tuần của Nhóm 14</div>
            </Form>

        </div>
    </>
  )
}

export default HomePage