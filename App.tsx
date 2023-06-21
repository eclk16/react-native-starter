import React from "react";
import InıtApp from "./src/init";
import { LangProvider } from "./src/contexts/LanguageContext";
import { DataProvider } from "./src/contexts/DataContext";
import { AuthProvider } from "./src/contexts/AuthContext";
import { LoadingProvider } from "./src/contexts/LoadingContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";

function App() {
    return (
        <LangProvider>
            <ThemeProvider>
                <LoadingProvider>
                    <DataProvider>
                        <AuthProvider>
                            <InıtApp />
                        </AuthProvider>
                    </DataProvider>
                </LoadingProvider>
            </ThemeProvider>
        </LangProvider>
    );
}

function AppWrapper() {
    return <App />;
}

export default AppWrapper;
