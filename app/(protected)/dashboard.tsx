import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Drawer from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useDrawer } from "../src/admin/viewmodels/use-drawer";
export default function DashboardScreen() {

    const navigation = useNavigation()
    const { profile } = useDrawer()
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }


    return (
        <SafeAreaView style={styles.container}>
            <Drawer.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={openMenu} style={{ padding: 15 }}>
                    <Ionicons name="menu-outline" size={30} color="#005C3A" />
                </TouchableOpacity>
                <Text style={styles.logoText}>ShopEase</Text>
                <TouchableOpacity style={styles.profileContainer}>
                    <Image 
                    source={{uri:profile.avatarUrl}}
                    style={styles.avatarImage}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB"
    },
    header: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingHorizontal:15,
        paddingVertical:14
    },
    logoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#005C3A"
    },
    profileContainer:{
        borderRadius:20,
        overflow:"hidden",
        borderWidth:1
    },
    avatarImage:{
        width:40,
        height:40
    }
})