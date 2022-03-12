import { useState } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";
import HeaderText from "../components/Header";
import Input from "../components/Input";
import AppButton from "../components/Buttons";

const height = Dimensions.get("screen").height;

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const handleShow = () => setShowPass(!showPass);
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name={"arrow-back-ios"} size={21} />
                </TouchableOpacity>
                <View style={tw`mt-2`} />
                <HeaderText text={"Login"} />
                <Input
                    label={"Email Address or Username"}
                    LeftIcon={<MaterialIcons name="email" color={"#001219"} size={14} />}
                    placeholder={"you@gmail.com or FH21454"}
                    autoComplete={"off"}
                />
                <Input
                    label={"Password"}
                    LeftIcon={<Entypo name="lock" color={"#001219"} size={14} />}
                    placeholder={"Password"}
                    RightIcon={
                        <TouchableOpacity onPress={handleShow}>
                            <Feather
                                name={showPass ? "eye" : "eye-off"}
                                color={"#001219"}
                                size={14}
                            />
                        </TouchableOpacity>
                    }
                    secureTextEntry={showPass}
                    autoComplete={"off"}
                />
                <View style={{ marginTop: height * 0.2, alignItems: "center" }}>
                    <AppButton text={"Login"} onPress={() => { }} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f9fc",
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: height * 0.04,
        height: "100%",
    }
});

export default Login;
