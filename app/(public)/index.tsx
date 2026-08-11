import { TextInput, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useLogin } from "../src/viewmodels/use-login"
import { useRouter } from "expo-router"
import React from "react"

export default function LoginScreen() {
    const router = useRouter()

    const {
        isPasswordVisible,
        togglePasswordVisivility

    } = useLogin()
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}

            >
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Feather
                            name="shopping-bag"
                            size={25}
                            color={"#fff"}
                        ></Feather>
                    </View>
                    <Text style={styles.appNameLabel}>ShopEase</Text>
                    <Text style={styles.welcomeLabel}>Welcome back! Please enter your details</Text>
                </View>
                {/* CARD */}
                <View style={styles.card}>
                    <Text style={styles.label}>Email Adress</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="mail"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput style={styles.input}
                            placeholder="name@gmail.com"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.passwordRow}>
                        <Text>Password</Text>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordLabel}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input}
                            placeholder="****************"
                            secureTextEntry={isPasswordVisible ? true : false}
                        />
                        <TouchableOpacity
                            onPress={togglePasswordVisivility}
                        >
                            <Feather
                                name={isPasswordVisible ? "eye-off" : "eye"}
                                size={20}
                                color={"#9CA3AF"}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpRow}>
                    <Text style={styles.signUpText}>Does not have an account? </Text>
                    <TouchableOpacity 
                        onPress={()=> router.push("/(public)/register")}
                    >
                        <Text style={styles.signUpTextLink}>Sign up for free</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24
    },
    header: {
        alignItems: "center",
    },
    logoContainer: {
        width: 60,
        height: 60,
        backgroundColor: "#00B074",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16
    },
    appNameLabel: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#006C47"
    },
    welcomeLabel: {
        fontSize: 15,
        color: "#6B7280",
        marginBottom: 25
    },
    card: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#F3F4F6",
        borderRadius: 14,
        shadowColor: "#fff",
        shadowOpacity: 0.03,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        padding: 24,
        elevation: 2
    },
    label: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D1D5D8",
        paddingHorizontal: 12,
        borderRadius: 8,
        height: 50,
        marginBottom: 15
    },
    input: {
        flex: 1,
        height: "100%",
        marginLeft: 8

    },
    passwordRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    forgotPasswordLabel: {
        color: "#006C47",
        fontWeight: "600"
    },
    buttonLogin: {
        backgroundColor: "#006C47",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 8
    },
    buttonLoginText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    signUpRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 35,

    },
    signUpText: {
        fontSize: 14,
        color: "#6B7280"
    },
    signUpTextLink: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#006C47"
    }
})