import { useContext } from "react"
import { ThemeContext } from "./contexts/Themecontext"
export const Body=()=>{
    const {isTheme} =useContext(ThemeContext)
    console.log(isTheme)
    return (
        
        <div style={isTheme ? {"background": "#282c34"}: {"background": "red"}}>fbhisduf</div>
    )
}