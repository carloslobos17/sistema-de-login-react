import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import Drawer from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useDrawer } from "../src/admin/viewmodels/use-drawer";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useAuth } from "../src/context/AuthContext";
import { CategoryService } from "../src/categories/services/category.service";
import { useCreateProduct } from "../src/products/viewmodels/use-create-product";

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width - 44) / 2 //ancho total menos margenes laterales



export default function DashboardScreen() {


    const navigation = useNavigation()
    const router = useRouter()
    const { profile } = useDrawer()

    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }
const {
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
    products,
    searchQuery,
    setSearchQuery,
    isLoadingCategories,
    isLoadingProduct
}= useCreateProduct()

    return (
        <SafeAreaView style={styles.container}>
            <Drawer.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={openMenu} style={{ padding: 15 }}>
                    <Ionicons name="menu-outline" size={30} color="#005C3A" />
                </TouchableOpacity>
                <Text style={styles.logoText}>ShopEase</Text>
                <TouchableOpacity
                    style={styles.profileContainer}
                    onPress={() => router.push("/(protected)/profile")}
                >
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
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchInput}
                />
            </View>
            <View style={styles.categorieWrapper}>
                {isLoadingCategories ? (
                    <ActivityIndicator color="#005C3A" size="small" />
                ) : (
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={ (item) => (item.id === null ? "all":item.id.toString())}
                        contentContainerStyle={styles.categoriesList}
                        renderItem={({ item }) => {
                            const isSelected = selectedCategoryId === item.id
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedCategoryId(item.id as number | null)}
                                    style={[
                                        styles.categoryItem,
                                        isSelected && styles.categoryItemSelected
                                    ]}
                                >
                                    <Text style={[
                                        styles.categoryText,
                                        isSelected && styles.categoryTextSelected
                                    ]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                )}

            </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.gridRowSpace}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.productImage}
                            />
                        </View>
                        <View style={styles.productoInfo}>
                            <Text style={styles.productTitle}>{item.name}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <View style={styles.priceRow}>
                                <Text>${item.regularPrice.toFixed(2)}</Text>
                                <TouchableOpacity style={styles.cardBtn}>
                                    <Ionicons name="cart-outline"
                                        size={16}
                                        color={"#fff"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
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
        maxHeight: 50,
        marginBottom: 16
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
    categoryTextSelected: {
        color: "#fff"
    },
    // estilos para las tarjetas
    productList: {
        paddingHorizontal: 16,
        paddingBottom: 24,

    },
    gridRowSpace: {
        justifyContent: "space-between"
    },
    cardContainer: {
        width: CARD_WIDTH,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    newBadge: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "#005C3A",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6
    },
    newBadgeText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold"
    },
    imageWrapper: {
        height: 140,
        width: "100%",
        backgroundColor: "#F3F4F6",
        position: "relative"
    },
    productoInfo: {
        padding: 12
    },
    productTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 2
    },
    productDescription: {
        fontSize: 11,
        color: "#6B7280",
        marginBottom: 8
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardBtn: {
        backgroundColor: "#008074",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,

    }
})