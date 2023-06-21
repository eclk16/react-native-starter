import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import tw from 'twrnc';
import {SUPABASE_URL} from '@env'
import { getValue, setValue } from "./src/inc/asyncStorage";
function App(): JSX.Element {
  const [deneme,setDeneme] = useState('');
  useEffect(() => {
    //setValue('deneme','eclk16');
    getValue('deneme').then(value => setDeneme(value));
  },[]);

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>

      <Text style={tw`text-red-400`}>React Native Starter</Text>
      <Text style={tw`text-red-400`}>{deneme}</Text>

    </SafeAreaView>
  );
}

export default App;
