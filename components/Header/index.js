import { Text, StyleSheet } from "react-native"

const HeaderText = ({ text, additionalStyles }) => {
    return (
        <Text style={[styles.headerText, additionalStyles]}>{text}</Text>
    );
}

export default HeaderText;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontFamily: "PoppinsMedium",
        color: "#29304d",
    },
})