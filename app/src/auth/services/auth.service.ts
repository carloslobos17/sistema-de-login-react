import { AuthResponse } from "../models/auth.model";
import axios from "axios"

const API_URL = "https://api-ecommerce-5aby.onrender.com"
export const AuthService = {
    login: async(email:string, password:string):Promise<AuthResponse>=>{
        try{
            const response = await axios.post(`${API_URL}/auth/login`,{
                email,
                password
            })
            return response.data
        }catch (error:any){
            if(axios.isAxiosError(error) && error.response){
                throw new Error(error.response.data?.message || "Error to login")
            }
            throw new Error("Server error")
        }
    }
}