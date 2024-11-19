import { Button, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const MyStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    myButton: {
        padding: 10,
        height: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        fontWeight: '700',
    },
    describe: {
        fontSize: 18,
        marginTop: 20,
        color: 'gray'
    },
    linkText: {
        fontSize: 18,
        fontWeight: '500',
    },
    ButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    }
})