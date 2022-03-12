import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Success from "./screens/Success";
import Additional from "./screens/Signup/Additional";


const Stack = createNativeStackNavigator();

export default function Navigator(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Landing"} >
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Additional" component={Additional} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
    )
}