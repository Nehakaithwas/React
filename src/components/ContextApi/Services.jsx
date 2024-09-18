import {useBioContext} from './index'

export const Services =()=>{
    const {myName,age} =useBioContext();
    return(
        <>
         <h2>hello,I am from Services,I am {myName}and my age is {age}</h2>    
        </>
    )
}