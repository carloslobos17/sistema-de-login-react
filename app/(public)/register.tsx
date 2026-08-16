import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, ActivityIndicatorBase } from "react-native"
import { useRegister } from "../src/auth/viewmodels/use-register";


export default function RegisterScreen() {
    const router = useRouter();
    const {
        fullName,
        lastName,
        phone,
        email,
        password,
        confirmPassword,
        handleRegister,
        setfullName,
        setLastName,
        setPhone,
        setEmail,
        setPassword,
        setConfirmPassword,
        errorMessage,
        isLoading
    } = useRegister()
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Create Account</Text>
                    <Text style={styles.label}>Full name</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="user"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="Madeline"
                            value={fullName}
                            onChangeText={setfullName}
                        />
                    </View>
                    <Text style={styles.label}>Last name</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="user"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="Henriquez"
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>
                    <Text style={styles.label}>Phone</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="phone"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="1234-5678"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <Text style={styles.label}>Email Adress</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="user"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="name@mail.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="lock"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="*****************"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.inputContainer}>
                        <Feather
                            name="user"
                            size={20}
                            color="#9CA3AF"
                        />
                        <TextInput
                            style={{ flex: 1, height: "100%", marginLeft: 8 }}
                            placeholder="*****************"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    {isLoading ? (<ActivityIndicator size="large" color="#006C47" />
                    ) : (
                        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
                            <Text style={styles.buttonRegisterText}>Register</Text>
                        </TouchableOpacity>
                    )
                    }

                </View>
                <View style={styles.signRow}>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => { router.push("/(public)") }}
                    >
                        <Text style={styles.signInLink}>Log in here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB"
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 24,
        justifyContent: "center",
        paddingTop: 40
    },
    card: {
        backgroundColor: "#fff",
        borderWidth: 1,
        padding: 12,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1F2937",
        textAlign: "center",


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
    buttonRegister: {
        backgroundColor: "#006C47",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 8
    },
    buttonRegisterText: {
        color: "#fff",
        fontSize: 16
    },
    signRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    signInText: {
        fontSize: 14,
        color: "#6B7280"
    },
    signInLink: {
        fontSize: 14,
        color: "#006C47",
        fontWeight: "bold"
    }
})