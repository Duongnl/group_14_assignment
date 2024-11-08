"use client"

import Image from "next/image"
import { Form } from "react-bootstrap"
import "@/styles/login.css"

const DeployUi = () => {

    return (<>
        <div className='container-login__div'>
            <Image className='background-image__Image'
                src="/images/background-night.jpg"
                alt="Picture of the author"
                fill // Tự động điều chỉnh kích thước
            />

            <Form className="shadow p-4 bg-white rounded container-login__Form">
                <div className="h5 mb-2 text-center">Deploy bằng Vercel</div>
                <a target="_blank" rel="noopener noreferrer" href="https://weather-website-lac-nine.vercel.app/">https://weather-website-lac-nine.vercel.app/</a>
             

            </Form>



        </div>
    </>)
}

export default DeployUi
