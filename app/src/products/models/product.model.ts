export interface CreateProductRequest {
    name: string
    categoryId: number
    description: string
    regularPrice: number 
    sku:string
    offerPrice?: number
    initialStock: number
    minStockAlert: number
}

export interface CreateProductResponse {
    id: number
    name: string
    categoryId: number
    description: string
    regularPrice: number
    offerPrice?: number
    initialStock: number
    minStockAlert: number
    createdAt?:string
    updateAt?:string
}

export interface ProductItem{
    id: number
    name:string
    categoryId: number
    categoryName: string
    description: string
    regularPrice: number 
    offerPrice?: number
    initialStock: number
    minStockAlert: number
    imageUrl?:string
    createdAt?:string
    updateAt?:string
}