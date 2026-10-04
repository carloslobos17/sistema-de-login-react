import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderShownContext } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProductScreen() {
    const router = useRouter()
    const [description, setDescription] = useState("")
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Drawer.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => router.replace("/(protected)/dashboard")}
                    >
                        <Ionicons name="arrow-back-outline" size={26} />
                    </TouchableOpacity>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.headerTitle}>ADMIN PORTAL</Text>
                        <Text style={styles.headerSubtitle}>Nuevo producto</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollContent} >
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Feather name="clipboard" size={20} color="#006C47" style={{ marginRight: 10 }} />
                            <Text style={styles.cardTitle}>Informacion general</Text>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>
                                Nombre del producto
                            </Text>
                            <TextInput
                                placeholder="Ej. Zapato Nike"
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Categorias</Text>
                            <TouchableOpacity style={styles.selectorInput}>
                                <Text>Seleccione una categoria</Text>
                                <Feather name="chevron-down" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>SKU / Codigo de barra</Text>
                            <View style={styles.inputWithIcon}>
                                <MaterialCommunityIcons
                                    name="barcode-scan"
                                    size={20}
                                    style={{ marginRight: 10 }}
                                />
                                <TextInput
                                    placeholder="PR-2354254312"
                                    style={styles.textInputScan}
                                />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Descripcion detallada</Text>
                            <TextInput
                                placeholder="Describe los atributos principales, materiales, confeccion"
                                multiline
                                numberOfLines={5}
                                textAlignVertical="top"
                                maxLength={2000}
                                value={description}
                                onChangeText={setDescription}
                                style={styles.textAreaInput}
                            />
                        </View>
                        <View style={styles.chartCounterDescription}>
                            <Text>{description.length} / 2000</Text>
                        </View>
                    </View>
                    {/* precios e inventario */}
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Feather
                                name="dollar-sign"
                                size={20}
                                color={"#005C47"}
                            />
                            <Text style={styles.cardTitle}>Precios e inventario</Text>
                        </View>
                        <View style={styles.rowCols}>
                            <View style={styles.col}>
                                <Text style={styles.inputLabel}>Precio regular</Text>
                                <View style={styles.inputPriceWrapper}>
                                    <Text style={{ marginRight: 6 }}>$</Text>
                                    <TextInput
                                        placeholder="0.0"
                                        keyboardType="numeric"
                                        style={styles.priceInput}
                                    />
                                </View>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.inputLabel}>Precio de oferta</Text>
                                <View style={styles.inputPriceWrapper}>
                                    <Text style={{ marginRight: 6 }}>$</Text>
                                    <TextInput
                                        placeholder="0.0"
                                        keyboardType="numeric"
                                        style={styles.priceInput}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.rowCols}>
                            <View style={styles.col}>
                                <Text style={styles.inputLabel}>Stock inicial</Text>
                                <View style={styles.inputPriceWrapper}>
                                    <Text style={{ marginRight: 6 }}>$</Text>
                                    <TextInput
                                        placeholder="50"
                                        keyboardType="numeric"
                                        style={styles.priceInput}
                                    />
                                </View>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.inputLabel}>Stock minimo</Text>
                                <View style={styles.inputPriceWrapper}>
                                    <Text style={{ marginRight: 6 }}>$</Text>
                                    <TextInput
                                        placeholder="5"
                                        keyboardType="numeric"
                                        style={styles.priceInput}
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btnSave}
                        >
                            <Ionicons style={styles.checkIcon} name="checkmark-outline" size={22} color="#fff" />
                            <Text style={styles.btnSaveText}>Guardar Producto</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#F9FAFB"
    },
    titleWrapper: {
        flex: 1,
        marginLeft: 16
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
        letterSpacing: 0.8
    },
    headerSubtitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#006C47",
        marginTop: 2
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 12,
        elevation: 2
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827"
    },

    inputGroup: {
        marginBottom: 10
    },
    inputLabel: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#374151",
        marginBottom: 8
    },
    textInput: {
        height: 48,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        fontSize: 14,
        borderRadius: 10
    },
    selectorInput: {
        height: 48,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 14,
        borderColor: "#E5E7EB",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputWithIcon: {
        height: 48,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#E5E7EB",
        paddingHorizontal: 14,
        borderRadius: 10,
        alignItems: "center"
    },
    textInputScan: {
        flex: 1,
        padding: 0
    },
    textAreaInput: {
        height: 120,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14
    },
    chartCounterDescription: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    rowCols: {
        flexDirection: "row",
        gap: 8
    },
    col: {
        flex: 1,
        marginBottom: 5
    },
    inputPriceWrapper: {
        height: 48,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    priceInput: {
        flex: 1,
        padding: 0
    },
    btnSave: {
        backgroundColor: "#006C47",
        height: 48,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
        marginTop: 15
    },
    checkIcon: {
        marginRight: 8
    },
    btnSaveText: {
        color: "#fff",
        fontSize: 15
    },
})