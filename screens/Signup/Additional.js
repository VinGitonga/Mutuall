import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Feather, MaterialCommunityIcons, Entypo  } from "@expo/vector-icons";
import HeaderText from "../../components/Header";
import Input from "../../components/Input";
import AppButton from "../../components/Buttons";

const height = Dimensions.get("screen").height;

const Additional = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name={"arrow-back-ios"} size={21} />
                </TouchableOpacity>
                <View style={tw`mt-2`} />
                <HeaderText text={"Additional Details"} />
                <Input
                    label={"Name"}
                    LeftIcon={<Feather name="user" color={"#001219"} size={14} />}
                    placeholder={"Jack Ryan"}
                    autoComplete={"off"}
                />
                <HeaderText text={"Address Details"} additionalStyles={tw`mt-2 mb-1`} />
                <Input
                    label={"City"}
                    LeftIcon={<MaterialCommunityIcons  name="city-variant" color={"#001219"} size={14} />}
                    placeholder={"New York"}
                    autoComplete={"off"}
                />
                <Input
                    label={"State"}
                    LeftIcon={<MaterialCommunityIcons  name="home-city" color={"#001219"} size={14} />}
                    placeholder={"Illinois"}
                    autoComplete={"off"}
                />
                <Input
                    label={"Zip Code"}
                    LeftIcon={<Entypo name="address" color={"#001219"} size={14} />}
                    placeholder={"5412-8956"}
                    autoComplete={"off"}
                />
                <View style={{ marginTop: height * 0.02, alignItems: "center" }}>
                    <AppButton text={"Finish"} onPress={() => navigation.navigate("Success")} />
                </View>
            </View>
        </ScrollView>
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

export default Additional;
