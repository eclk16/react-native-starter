import React from 'react';
import { SafeAreaView, Text } from "react-native";
import tw from 'twrnc';
import {SUPABASE_URL} from '@env'
function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>

      <Text style={tw`text-red-400`}>React Native Starter</Text>
      <Text style={tw`text-red-400`}>{SUPABASE_URL}</Text>

    </SafeAreaView>
  );
}

export default App;
