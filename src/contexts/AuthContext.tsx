// Create a context
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../inc/supabase";
import { LoadingContext } from "./LoadingContext";
const AuthContext = createContext({});

// @ts-ignore
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const {setLoading} = useContext(LoadingContext);
    // @ts-ignore
    useEffect ( () => {
        checkSession();
        //logout();
    },[]);
    async function checkSession(){
        setLoading(true);
        const { data, error } = await supabase.auth.getSession();
        setUser(data.user);
        refreshSession();
    }
    async function refreshSession(){
        const { data, error } = await supabase.auth.refreshSession()
        setUser(data.user);
        setLoading(false);
    }
    async function login(credentials: object) {
        setLoading(true);
        // @ts-ignore
        let { data, error } = await supabase.auth.signInWithPassword(credentials)
        if(error == null){
            setUser(data.user);
        }
        else{
            alert(error);
        }
        setLoading(false);
    }
    async function register(credentials: object) {
        setLoading(true);
        // @ts-ignore
        let { data, error } = await supabase.auth.signUp(credentials)
        if(error == null){
            setUser(data.user);
        }
        else{
            alert(error);
        }
        setLoading(false);
    }
    function removeAccount(data: object) {
        return data;
    }
    function updateUser(data: object) {
        return data;
    }
    async function logout(){
        setLoading(true);
        let { error } = await supabase.auth.signOut();
        if(error == null){
            setUser(null);
        }
        else{
            alert(error);
        }
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={{user, login, register, logout, updateUser, removeAccount}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};
