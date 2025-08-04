import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme==="dark"){
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }

},[])

    const themeToggle = () => {
        if(isDarkMode === true){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return(
        <button onClick={themeToggle}  className="max-sm:hidden right-5 p-2 fixed top-5 z-50 rounded-full 
        transition-colors duration-300 focus:outline-hidden">
            {isDarkMode ? <Sun className="h-7 w-7 text-yellow-300" /> 
            : <Moon className="h-7 w-7 text-blue-900  " />}
        </button>
    )
}
