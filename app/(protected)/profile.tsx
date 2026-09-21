import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "../src/context/AuthContext";
import { AuthService } from "../src/auth/services/auth.service";

export default function ProfileScreen() {
    const router = useRouter();
    const { user, token, updateUserSession } = useAuth()
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)


    useEffect(() => {
        if (user) {
            setName(user.name || "")
            setName(user.lastName || "")
            setName(user.phone || "")
        }
    }, [user])

    const handleUpdateUser = async () => {
        if (!name.trim() || !lastName.trim() || !phone.trim()) {
            Alert.alert("Campos incompletos", "Por favor llenar los campos")
            return
        } if (!user?.id || !token) {
            Alert.alert("Error de sesion", "No se encontro el usuario")
            return
        }
        setIsUpdating(true)
        try {
            const updateUser = await AuthService.updateUser(
                user.id,
                name,
                lastName,
                phone,
                token
            )
            await updateUserSession(updateUser)
            Alert.alert(
                "Excelente",
                "Tu informacion ha sido actuaizada con exito en el servidor"
            )
        } catch (error: any) {
            Alert.alert("Error de registro", error.message || "No se pudo actualizar")
        } finally {
            setIsUpdating(false)
        }
    }
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
                        <Text style={styles.inputLabel}>NAME</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons style={styles.inputIcon} name="person-outline" size={20} />
                            <TextInput
                                placeholder="Full name"
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                    </View>
                    <View style={styles.inpuGroup}>
                        <Text style={styles.inputLabel}>LAST NAME</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons style={styles.inputIcon} name="person-outline" size={20} />
                            <TextInput
                                placeholder="Last Name"
                                style={styles.input}
                                value={lastName}
                                onChangeText={setLastName}
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
                                value={phone}
                                onChangeText={setPhone}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.updateButton}
                        onPress={handleUpdateUser}
                        disabled={isUpdating}
                    >
                        {isUpdating ? (
                            <ActivityIndicator color={"#fff"} size="small" />
                        ) : (
                            <>
                                <Ionicons name="checkmark-circle-outline" size={20} color={"#fff"} style={{ marginRight: 8 }} />
                                <Text style={styles.updateButtonText}>Save changes</Text>
                            </>
                        )
                        }

                    </TouchableOpacity>
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
    },
    updateButton: {
        flexDirection: "row",
        backgroundColor: "#005C3A",
        borderRadius: 12,
        height: 48,
        alignItems: "center",
        justifyContent: "center"
    },
    updateButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }

})