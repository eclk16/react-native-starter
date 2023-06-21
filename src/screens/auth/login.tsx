import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { LangContext } from "../../contexts/LanguageContext";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";


export default function LoginScreen(){
  const {selectedLang,setSelectedLang} = useContext(LangContext);
  const {login,register,user} = useContext(AuthContext);
  const {theme,selectedTheme,changeTheme} = useContext(ThemeContext);
  return <SafeAreaView>
    <TouchableOpacity
        onPress={() => {
          setSelectedLang(selectedLang == 'tr' ? 'en' : 'tr');
        }}
    >
      <Text>{selectedLang} - {user?.email}</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() => {login({email:'mail@emrecolak.net',password:'emre237a'})}}
    >
      <Text>Giriş</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() => {register({email:'mail@emrecolak.net',password:'emre237a'})}}
    >
      <Text>Kayıt</Text>
    </TouchableOpacity>

    <TouchableOpacity

        onPress={() => {changeTheme('dark' == selectedTheme ? 'light' : (selectedTheme == 'light' ? 'default' : 'dark'))}}
    >
      <Text style={{color:theme.primary.buttonText}}>{selectedTheme}-DEĞİŞTİR</Text>
    </TouchableOpacity>
  </SafeAreaView>;
}
