// Create a context
import { createContext, useContext } from "react";
import LoginScreen from "../screens/auth/login";
import HomeScreen from "../screens/home";
import { LangContext } from "./LanguageContext";
const DataContext = createContext({});

// @ts-ignore
const DataProvider = ({children}) => {
    const {lang} = useContext(LangContext);
    const menu = {
        authMenu: [
            {
                name:"Login",
                options:{
                    title:lang["title.login"],
                },
                component:LoginScreen
            },
            {
                name:"Register",
                options:{
                    title:lang["title.register"],
                },
                component:LoginScreen
            },
            {
                name:"ForgotPassword",
                options:{
                    title:lang["title.forgotPassword"],
                },
                component:LoginScreen
            },
            {
                name:"PasswordReset",
                options:{
                    title:lang["title.passwordReset"],
                },
                component:LoginScreen
            },
            {
                name:"DeteleAccount",
                options:{
                    title:lang["title.deleteAccount"],
                },
                component:LoginScreen
            },
        ],
        authOptions: {

        },
        tab: [
            {
                name:"Home",
                title:"title.home",
                header:false,
                component:HomeScreen
            }
        ],
        tabOptions:{

        },
        drawer: [
            {
                name:"Home",
                title:"title.home",
                header:false,
                component:HomeScreen
            }
        ],
        drawerOptions:{

        }
    }

    return (
        <DataContext.Provider
            value={{menu}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataContext, DataProvider};

