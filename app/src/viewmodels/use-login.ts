import {useState} from "react";

export function useLogin(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisivility = () => {
        setIsPasswordVisible((prev) => !prev)
    }
    return{
        isPasswordVisible,
        togglePasswordVisivility
    }
}