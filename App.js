import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading";
import Navigator from "./Navigator";

const App = () => {
    const [loaded, setLoaded] = useState(false);

    const loadFonts = async () => {
        await useFonts();
    }

    if (!loaded) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setLoaded(true)}
                onError={() => { }}
            />
        );
    }

    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}

export default App;