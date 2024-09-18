import { createContext, useState,useContext } from "react"



// it is a object
export const ThemeContext=createContext();

export const ThemeProvider =({children})=>{
   
    const [theme,setTheme]=useState("dark")
    const handlerToogleTheme =()=>{
        setTheme((prevTheme)=>(prevTheme==="dark"?"light":"dark"))
     }
    return(
       <ThemeContext.Provider value={{theme,handlerToogleTheme}}>{children}</ThemeContext.Provider>
    )
}

export const useTHeme =()=>{
    const context=useContext(ThemeContext);
    return context;
}