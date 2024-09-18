
import { useContext } from 'react'
// import {ThemeContext} from './ThemeProvider'
import {useTHeme} from './ThemeProvider'
import '../ChangeMode/Cmode.css'

export const ChangeMode=()=>{

    const {theme,handlerToogleTheme}=useTHeme();

   
return(
    
    <>
        <div className={theme=="light"?"light-Theme":"dark-Theme"}>
        <h3>Dark Light Mode Website</h3>
        <p>Hello!! my react v19 fans😍❤😍</p>
        <button onClick={handlerToogleTheme} style={{backgroundColor:"lightblue"}} >{theme=="light"?"Change to Dark Mode":"Change to Light Mode"}</button>

        </div>
    </>
)
}
