// Create a context
import { createContext, useEffect, useState } from "react";

import { getValue, setValue } from "../inc/asyncStorage";
import { themes } from "../themes";
import { DEFAULT_THEME } from "../themes/default";
const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [selectedTheme,setSelectedTheme] = useState("default");
    const [theme,setTheme] = useState(DEFAULT_THEME);

    function changeTheme(t){
        setSelectedTheme(t);
        const selectedTemplate =
            themes.find(theme => theme.theme === t);
        setTheme(selectedTemplate.template);
        setValue("theme",t);
    }

    useEffect(() => {
        getValue("theme").then((t) => {
            if (t) {
                setSelectedTheme(t);
            } else {
                setSelectedTheme("default");
            }
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme,selectedTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};

export { ThemeContext, ThemeProvider };
