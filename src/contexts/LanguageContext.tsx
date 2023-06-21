// Create a context
import { createContext, useEffect, useState } from "react";
import {DEFAULT_LANG} from "@env";
import { languages } from "../languages";
const LangContext = createContext({});

// @ts-ignore
const LangProvider = ({children}) => {
    const [selectedLang,setSelectedLang] = useState(DEFAULT_LANG);
    const [lang,setLang] = useState({});

    useEffect(() => {
        const selectedLanguage = languages.find(lang => lang.langCode === selectedLang);
        setLang(selectedLanguage.lang);
    },[selectedLang])

    return (
        <LangContext.Provider
            value={{lang,selectedLang,setSelectedLang}}>
            {children}
        </LangContext.Provider>
    );
};

export {LangContext, LangProvider};

