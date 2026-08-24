import { useRouter } from "expo-router";
import { useState } from "react";
import { AdminProfile, DrawerItemOption } from "../models/drawer.model";
export function useDrawer() {
    const router = useRouter()

    const [profile] = useState<AdminProfile>({
        name: "Admin User",
        role: "System managment",
        avatarUrl: "https://www.clinicas-veterpet.com/wp-content/uploads/2024/02/blog-veterpet-edad-gatitos.jpg",
        version:"v4.4.4"
    })

    const navigationOptions:DrawerItemOption[]=[
        {name:"dashboard", label:"Dashboard",icon:"grid"},
        {name:"orders", label:"Orders",icon:"package"},
        {name:"inventory", label:"Inventory",icon:"archive"}
    ]
    return{
        profile,
        navigationOptions
    }
}