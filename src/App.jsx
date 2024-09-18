

import './App.css'
import { UseRef } from './components/useref'
import {ForwardRef} from './components/ForwardRef'
import {ParentComponent} from './components/PropDrilling'
import {BioProvider} from './components/ContextApi/index'
import { Home } from './components/ContextApi/Home'
import {About} from './components/ContextApi/About'
import {Services} from './components/ContextApi/Services'
import {ChangeMode} from './components/ChangeMode/ChangeMode'
import {ThemeProvider} from './components/ChangeMode/ThemeProvider'
import {ThemeContext} from './components/ChangeMode/ThemeProvider'
import {UseReducer} from './components/useReducer/UseReducer'
import {ReactMemo} from './components/Memo/ReactMemo'
// import { useContext } from 'react'






function App() {
  // const {theme,setTheme}=useContext(ThemeContext);
  return(
   
    <>
      {/* <BioProvider>
      <Home />
      <About/>
      <Services/>
    </BioProvider> */}

{/* 
        <ThemeProvider>
          <ChangeMode/>
        </ThemeProvider> */}

        {/* <UseReducer/> */}
        <ReactMemo/>
    </>

  
  )
  
}

export default App
