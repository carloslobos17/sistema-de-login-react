import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDrawer } from "../src/admin/viewmodels/use-drawer";

export default function ProtectedLayout() {
    const { profile, navigationOptions } = useDrawer()

    return (
        <GestureHandlerRootView>
            <Drawer
                screenOptions={{
                    headerTintColor: "#006C47"
                }}
                drawerContent={(props) => {
                    const activeIndex = props.state.index
                    const activeRouteName = props.state.routeNames[activeIndex]

                    return (
                        <View style={styles.drawerContainer}>
                            <View style={styles.header}>
                                <View style={styles.headerInfoUser}>
                                    <Image
                                        style={styles.avatar}
                                        source={{ uri: profile.avatarUrl }}
                                    />
                                    <View style={styles.headerInfo}>
                                        <Text style={styles.adminName}>{profile.name}</Text>
                                        <Text style={styles.adminRole}>{profile.role}</Text>
                                    </View>
                                </View>
                                <View style={styles.versionTag}>
                                    <Text>{profile.version}</Text>
                                </View>
                                <View>
                                    {navigationOptions.map((option) => {
                                        const isSelected = activeRouteName === option.name
                                        return (
                                            <TouchableOpacity
                                                key={option.name}
                                            >
                                                <Text>{option.label}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 50
    },
    header: {
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7E8",
        alignItems: "flex-start"
    },
    headerInfoUser: {
        flexDirection: "row"
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    headerInfo: {
        marginLeft: 15,
        marginTop: 5
    },
    adminName: {
        fontSize: 20,
        color: "#006C47",
        fontWeight: "bold"
    },
    adminRole: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#6B7280"
    },
    versionTag: {
        borderWidth: 1,
        paddingHorizontal: 8,
        borderColor: "#D1D5DB",
        paddingVertical: 2,
        marginTop: 8,
        borderRadius: 12
    }
})