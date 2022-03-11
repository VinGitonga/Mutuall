import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import tw from "twrnc"
import AppButton from '../components/Buttons';
import HeaderText from '../components/Header';
const height = Dimensions.get("screen").height;


const Landing = () => {
    return (
        <View style={styles.container} >
            {/* Image section */}
            <View style={tw`items-center justify-center`} >
                <Image source={require("../assets/images/img1.jpg")} style={styles.img} />
            </View>
            {/* Text Section */}
            <View style={styles.textSection}>
                {/* Header Text */}
                <HeaderText text={"Let's get started."} />
                <Text style={styles.text1}>
                    Never a better time than now to start thinking of
                    managing all your finances with ease.
                </Text>
            </View>
            {/* Button Section */}
            <View style={styles.btns}>
                <AppButton text={"Create an account"} />
                <TouchableOpacity>
                    <Text style={styles.loginText}>Login to Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f9fc",
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    img: {
        height: height * 0.3,
        width: height * 0.3,
        marginTop: 10,
        borderRadius: 999,
    },
    textSection: {
        marginVertical: height * 0.04,
        alignItems: "center",
        justifyContent: "center"
    },
    text1: {
        fontSize: 18,
        color: "#6c757d",
        textAlign: "center",
        marginTop: 12,
        fontFamily: "Poppins",
        paddingHorizontal: 12,
    },
    btns: {
        marginTop: height * 0.12,
        alignItems: "center",
    },
    loginText: {
        color: "#2573d5",
        fontFamily: "Poppins",
        marginTop: 10,
        fontSize: 18,
    }

})

export default Landing;