import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native"

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const AppButton = ({ text, onPress, containerStyle }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.btn, containerStyle]} >
                <Text style={styles.btnText} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 0.8 * width,
        height: height * 0.06,
        backgroundColor: "#2573d5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    btnText: {
        color: "#fff",
        fontFamily: "Poppins",
    },
})

export default AppButton;