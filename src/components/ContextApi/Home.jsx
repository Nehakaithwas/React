
import {useBioContext} from './index'
export const Home =()=>{
    // console.log(props)
    // for getting data from provider component we use,useContext hook
    const {myName,age}=useBioContext();
    
    return(
        <>
            <h1>helo: {myName} and i know your age :{age}</h1>
        </>
    )
}