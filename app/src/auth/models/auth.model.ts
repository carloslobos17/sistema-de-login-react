export interface Role {
    id: number
    name: string
    image: string
    route: string
}

export interface UserResponse {
    email: string
    id: number
    image: string
    name: string
    lastName: string
    notification_token: string | null
    phone: string
    roles: Role[]
}

export interface AuthResponse {
    token: string
    userResponse: UserResponse 
}