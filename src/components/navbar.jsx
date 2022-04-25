import { useContext } from "react"
import { ThemeContext } from "../contexts/Themecontext";
// import { ThemeContext } from "../contexts/Themecontext";

export const Navbar = ()=>{
    const {handleChange,isTheme} = useContext(ThemeContext)
    return (
        <div >
        <button
        onClick={()=>{
            handleChange(true)
        }}
        >Chnage Theme</button>
        </div>
    )
}

