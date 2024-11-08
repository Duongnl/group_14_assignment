import LoginForm from "@/components/assignment8/login"
import "@/styles/login.css"
import { SessionProvider } from "next-auth/react"
// import { signIn } from "@/auth"
const Assignment8 = () => {

    return (
        <>
         <SessionProvider>
            <LoginForm />
         </SessionProvider>
         
        </>
    )
}

export default Assignment8