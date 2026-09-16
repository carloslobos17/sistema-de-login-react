import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "../src/context/AuthContext";

export default function ProfileScreen() {
    const router = useRouter();
    const { user } = useAuth()
    return (

        <SafeAreaView style={styles.container}>
            <Drawer.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.replace("/(protected)/dashboard")}
                >
                    <Ionicons name="arrow-back-outline" size={26} />
                </TouchableOpacity>
                <Text style={styles.logoText}>ShopEase</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.profileCard}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{ uri: "https://www.clinicas-veterpet.com/wp-content/uploads/2024/02/blog-veterpet-edad-gatitos.jpg" }}
                            style={styles.profileAvatar}
                        />
                        <TouchableOpacity style={styles.cameraBtn}>
                            <Ionicons
                                name="camera"
                                size={16}
                                color={"#fff"}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.profileName}>Carlos Eduardo Lobos Soriano</Text>
                    <Text style={styles.profileSubtitle}>Full Stack Developer</Text>
                    {/* card points */}
                    <View style={styles.cardPoints}>
                        <View style={[styles.cardPointBox, styles.CardOrderColor]}>
                            <Text style={styles.CardBoxLabel}>Orders</Text>
                            <Text style={styles.cardBoxValue}>24</Text>
                        </View>
                        <View style={[styles.cardPointBox, styles.CardPointColor]}>
                            <Text style={styles.CardBoxLabel}>Points</Text>
                            <Text style={styles.cardBoxValue}>1,250</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionCard}>
                    <Text style={styles.personalHeader}>Personal information</Text>
                    <View style={styles.inpuGroup}>
                        <Text style={styles.inputLabel}>FULL NAME</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons style={styles.inputIcon} name="person-outline" size={20} />
                            <TextInput
                                placeholder="Full name"
                                style={styles.input}
                                value={user?.name || "Usuario no identificado"}
                            />
                        </View>
                    </View>
                    <View style={styles.inpuGroup}>
                        <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons style={styles.inputIcon} name="mail-outline" size={20} />
                            <TextInput
                                placeholder="Email Address"
                                style={styles.input}
                                value={user?.email || "Sin correo electronico"}
                            />
                        </View>
                    </View>
                    <View style={styles.inpuGroup}>
                        <Text style={styles.inputLabel}>PHONE NUMBER</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons style={styles.inputIcon} name="call-outline" size={20} />
                            <TextInput
                                placeholder="Phone number"
                                style={styles.input}
                                value={user?.phone || "Sin numero de telefono"}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: "#F3F4F6"
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#004C3A"
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 40
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    imageWrapper: {
        position: "relative"
    },

    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    cameraBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#005C3A",
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#fff"
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 4

    },
    profileSubtitle: {
        fontSize: 13,
        color: "#6B7280",
        marginBottom: 20
    },
    cardPoints: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    cardPointBox: {
        flex: 1,
        height: 64,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 6,

    },
    CardOrderColor: {
        backgroundColor: "#DBEAFE"
    },
    CardPointColor: {
        backgroundColor: "#E2F0FC"
    },
    CardBoxLabel: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#4B5563",
        letterSpacing: 1,
        marginBottom: 4
    },
    cardBoxValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#047857"
    },
    sectionCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 10,
        elevation: 2

    },
    personalHeader: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 18
    },
    inpuGroup: {
        marginBottom: 14
    },
    inputLabel: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#4B5563",
        letterSpacing: 1,
        marginBottom: 6
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D1D5D8",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: "#fff"
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: "#1F2937",
        paddingVertical: 0
    },
    inputIcon: {
        marginRight: 10
    }

})