import { router } from "expo-router";
import { Pressable,Text,View } from "react-native";

const HomePage = () => {
    return(
        <View>
            <Pressable onPress={() => router.push("/(session)/LoginScreen")}>
                <Text>
                    {"\n"}
                    {"\n"}     
                    Login
                </Text>
            </Pressable>
        </View>
    ); 
}

export default HomePage;