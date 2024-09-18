import {useBioContext} from './index'

export const About =()=>{
    const {myName,age} = useBioContext();
    
    return(
        <>
         <h2>hello,I am from About,I am {myName}and my age is {age}</h2>    
        </>
    )
}