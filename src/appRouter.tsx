import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";

const Tab = createBottomTabNavigator();

export default function AppRouter() {
  const {menu} = useContext(DataContext);
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          {
            menu.appMenu.map((item, index) => {
              return <Tab.Screen
                  key={index}
                  name={item.name}
                  component={item.component}
                  options={item.options}
              />;
            })
          }

        </Tab.Navigator>
      </NavigationContainer>
  );
}
