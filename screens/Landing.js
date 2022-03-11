import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const Landing = () => {
    return (
        <View style={styles.container} >
            {/* Image section */}
            <Image source={require("../assets/images/img1.jpg")} style={styles.img} />
            {/* Text Section */}
            
            {/* Button Section */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f7f9fc",
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    img: {
        height: height * 0.3,
        width: "100%",
        resizeMode: "cover",
    }
})

export default Landing;