import { useState } from "react";
import { AuthService } from "../services/auth.service";

export function useLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    console.log("EMAIL_VALUE", email)
    console.log("PASSWORD_VALUE", password)
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev)
    }

    const handleLogin = async () => {
        if (!email || !password){
            setErrorMessage("Please, complete all fields")
            return
        }
        setErrorMessage(null)
        setIsLoading(true)

        try{
            const data = await AuthService.login(email, password)
            console.log("TOKEN", data.token)
        }catch(error:any){
            setErrorMessage(error.message)
        }finally{
            setIsLoading(false)
        }
    }


    return {
        email,
        password,
        setEmail,
        setPassword,
        isLoading,
        errorMessage,
        isPasswordVisible,
        togglePasswordVisibility,
        handleLogin
    }
}