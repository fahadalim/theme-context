import { createContext,useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [isTheme,setIsTheme] = useState(false);

    const handleChange = (state)=>{
        setIsTheme(state)
    }

    return (
        <ThemeContext.Provider value={{isTheme,handleChange}}>{children}</ThemeContext.Provider>
    )
}