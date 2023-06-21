import React from "react";
import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";

function LoadingScreen() {
    return (
        <View style={[tw`h-[100%] w-[100%] opacity-50  flex items-center justify-center absolute `,{zIndex:99999}]}>
            <ActivityIndicator size="large" color="black"/>
        </View>
    );
}
export default LoadingScreen;
