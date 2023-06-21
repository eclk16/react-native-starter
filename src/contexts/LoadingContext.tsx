import { createContext, useState } from "react";
import LoadingScreen from "../components/Loading";
const LoadingContext = createContext({});
const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? <LoadingScreen/> : ''}
            {children}
        </LoadingContext.Provider>
    );
};
export { LoadingContext, LoadingProvider };
