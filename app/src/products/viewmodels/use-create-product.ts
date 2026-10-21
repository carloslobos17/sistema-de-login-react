import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ProductService } from "../services/product.service";
import { Alert } from "react-native";

export function useCreateProduct(){
    const router = useRouter()
    const {token} = useAuth()

    const [name, setName] = useState("")
    const [categoryId, setCategoryId] = useState<null | number>(null)  
    const [sku, setSku] = useState("")
    const [description, setDescription] = useState("")
    const [regularPrice, setRegularPrice] = useState("")
    const [offerPrice, setOfferPrice] = useState("")
    const [initialStock, setInitialStock] = useState("")
    const [minStockAlert, setMinStockAlert] = useState("")
    const [isLoadingProduct, setIsLoadingProduct] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    
    const submitProduct = async()=> {
        if(!name.trim() || !sku.trim() || !regularPrice.trim() || !initialStock.trim()){
            setErrorMessage("Por favor completa los campos obligatorios")
            return
        }
        if(!token){
            setErrorMessage("Sesion no valida")
            return
        }
        setErrorMessage(null)
        setIsLoadingProduct(true)
        try {
            await ProductService.createProduct(
                {
                    name:name.trim(),
                    categoryId:1,
                    sku:sku.trim(),
                    description:description.trim(),
                    regularPrice:parseFloat(regularPrice),
                    offerPrice: offerPrice ? parseFloat(offerPrice) : undefined,
                    initialStock: parseInt(initialStock, 10),
                    minStockAlert: minStockAlert ? parseInt(minStockAlert, 10):0
                },
                token
            )
            // el alert no funciona
            Alert.alert("Exito", "Producto creado correctamente", [
                {
                    text: "OK",
                    onPress:()=>router.replace("/(protected)/dashboard")
                }
            ])
        } catch (error:any) {
            setErrorMessage(error.message)
        }finally{
            setIsLoadingProduct(false)
        }
    }
    return{
        name,
        setName,
        categoryId,
        setCategoryId,
        sku,
        setSku,
        description,
        setDescription,
        regularPrice,
        setRegularPrice,
        offerPrice,
        setOfferPrice,
        initialStock,
        setInitialStock,
        minStockAlert,
        setMinStockAlert,
        isLoadingProduct,
        errorMessage,
        submitProduct
    }
}