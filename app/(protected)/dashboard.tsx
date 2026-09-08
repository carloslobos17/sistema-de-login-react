import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Drawer from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useDrawer } from "../src/admin/viewmodels/use-drawer";
import { FlatList, TextInput } from "react-native-gesture-handler";
export default function DashboardScreen() {
    const CATEGORIES = ["All categories", "Electronics", "Fashions", "Videogames"]

    const navigation = useNavigation()
    const { profile } = useDrawer()
    const [selectedCategory, setSelectedCategory] = useState("All products")
    const [searchQuery, setsearchQuery] = useState("")
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
                        source={{ uri: profile.avatarUrl }}
                        style={styles.avatarImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons
                    name="search-outline"
                    size={20}
                    style={styles.searchIcon}
                />
                <TextInput
                    placeholder="Search products"
                    style={styles.searchInput}
                />
            </View>
            <View style={styles.categorieWrapper}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={CATEGORIES}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.categoriesList}
                    renderItem={({ item }) => {
                        const isSelected = item === selectedCategory
                        return (
                            <TouchableOpacity
                            onPress={()=>setSelectedCategory(item)}
                                style={[
                                    styles.categoryItem,
                                    isSelected && styles.categoryItemSelected
                                ]}
                            >
                                <Text style={[
                                    styles.categoryText,
                                    isSelected && styles.categoryTextSelected
                                ]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
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
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 14
    },
    logoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#005C3A"
    },
    profileContainer: {
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1
    },
    avatarImage: {
        width: 40,
        height: 40
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 20,
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 14
    },
    searchIcon: {
        marginRight: 10,

    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: "#1F2937",
        padding: 0
    },
    categorieWrapper: {
        maxHeight: 50
    },
    categoriesList: {
        paddingHorizontal: 16,
        alignItems: "center"
    },
    categoryItem: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: "#E5E7EB",
        borderRadius: 24,
        marginRight: 18
    },
    categoryItemSelected: {
        backgroundColor: "#005C3A"
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#374151"
    },
    categoryTextSelected:{
        color:"#fff"
    }
})