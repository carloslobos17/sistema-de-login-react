import { useState } from "react";

export function useLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

        const togglePasswordVisibility = () => {
        console.log("PRESIONASTES EL ICONO ");

        setIsPasswordVisible((prev) => !prev)
    }
    return{
        email,
         password,
         setEmail,
         setPassword,
         isLoading,
         errorMessage,
         isPasswordVisible,
         togglePasswordVisibility
    }
}