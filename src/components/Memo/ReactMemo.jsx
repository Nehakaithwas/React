import { useState} from "react"
import Counts from './MemoCount'

export const ReactMemo=()=>{



  const [count,setCount]=useState(0);
  

    return(
        <>

            <h1>UseReducer components </h1>
               <h2>Count:{count}</h2>
              <button style={{background:"green"}} onClick={()=>setCount((prev)=>prev +1)}>Increment</button><br></br>
             
                  <Counts/>
        </>
    )
}