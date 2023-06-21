import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";

const Stack = createNativeStackNavigator();

export default function AuthRouter() {
    const {menu} = useContext(DataContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {
          menu.authMenu.map((item, index) => {
            return <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={item.options}
            />;
          })
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
