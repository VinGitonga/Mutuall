import { View, Text, TextInput, Dimensions } from "react-native"
import tw from "twrnc";

const height = Dimensions.get("screen").height;

const Input = ({ LeftIcon, RightIcon, label, ...props }) => {
    return (
        <View style={tw`mt-3`} >
            {/* Input Label */}
            <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>{label}</Text>
            {/* Input */}
            <View
                style={[
                    tw`mt-2 w-full flex flex-row justify-between items-center mb-1 border-2 rounded-xl`,
                    {
                        width: "100%",
                        backgroundColor: "#fff",
                        height: height * 0.07,
                        borderColor: "#6b705c",
                    }
                ]}
            >
                {LeftIcon && (
                    <View
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            left: 10,
                        }}
                    >
                        {LeftIcon}
                    </View>
                )}
                <TextInput
                    style={[
                        tw`px-8`,
                        {
                            width: "100%",
                            fontFamily: "Poppins",
                            height: "100%",
                            color: "#6c757d",
                        },
                    ]}
                    {...props}
                />
                {RightIcon && (
                    <View
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            right: 10,
                        }}
                    >
                        {RightIcon}
                    </View>
                )}
            </View>
        </View>
    )
}

export default Input;