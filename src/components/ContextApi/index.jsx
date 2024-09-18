import { createContext, useContext } from "react";

// it si context variable
export const BioContext=createContext();

// it is provider component 

export const BioProvider=({children})=>{
    // console.log(BioContext);
    // provider is kind of ware house and where you store shoe,laptop,pc...but you can't access to all of them until you are not providing it inside (Props)"value"
    // console.log(children)
  
    const myName="neha";
    const age=34;
    return <BioContext.Provider value={{myName:myName,age:age}}>{children}
    </BioContext.Provider>
}

// we are creating custom hooks (our own hooks)

export const useBioContext =()=>{
    const context=useContext(BioContext);
    return context;
}