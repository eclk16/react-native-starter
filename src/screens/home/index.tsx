import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function HomeScreen(){
  const {logout,user} = useContext(AuthContext);
  return <FontAwesome.Button
  name="music"
  onPress={logout}
  >
    <Text>{user.email}</Text>
  </FontAwesome.Button>;
}
