import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import HeaderText from '../components/Header';
import AppButton from '../components/Buttons';
import tw from "twrnc"


const height = Dimensions.get("screen").height;

const Success = () => {
    return (
        <View style={styles.container}>
            {/* Shield Icon */}
            <View style={styles.icon}>
                <Ionicons name="ios-shield-checkmark-sharp" size={200} color="#2573d5" />
            </View>

            {/* Success Text */}
            <HeaderText text={"Success!"} additionalStyles={{ fontSize: 28, marginHorizontal: 15 }} />
            {/* Start Usig Text */}
            <Text style={styles.text}>
                You have successfully registered to our app and can start working with it.
            </Text>

            <AppButton text={"Start Using"} containerStyle={tw`mt-8`} onPress={() => {}} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: "center"
    },
    icon: {
        marginTop: height * 0.18,
    },
    text: {
        color: "#6c757d",
        fontSize: 17,
        textAlign: "center",
        fontFamily: "Poppins",
    },
})

export default Success;