import React from "react";
import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";

function LoadingScreen() {
    return (
        <View style={[tw`h-[100%] w-[100%] opacity-100  flex items-center bg-white justify-center absolute `,{zIndex:99999}]}>
            <ActivityIndicator size="large" color="black"/>
        </View>
    );
}
export default LoadingScreen;
