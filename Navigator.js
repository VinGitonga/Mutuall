import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
    )
}