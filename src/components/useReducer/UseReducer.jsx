import { useState ,useReducer} from "react"

export const UseReducer=()=>{

    const reducer=(state,action)=>{
        console.log(state,action)
        // if(action.type === "INCREMENT"){
        //     return state + 1;
        // }
        // if(action.type === "DECREMENT"){
        //     return state -1;
        // }
        // else{
        //     return state=0
        // }
        switch(action.type){
            case "INCREMENT":
            return {count:state.count +1};
            break;

            case "DECREMENT":
            return {count:state.count +1}
            break;

            case "RESET":
            return {count:0}
            break;

            default:
            return state;
        }

    }
    
    const intialState={
        // count is a propery of obj
        count:0
    }


    // const [count,setCount]=useState(0);
    //dispatch function return action to a reducer function as a argument
    const [state,dispatch]=useReducer(reducer,intialState)
    // console.log(useReducer(reducer,0));

    return(
        <>

            <h1>UseReducer components </h1>
               <h2>Count:{state.count}</h2>
              <button style={{background:"green"}} onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button><br></br>
              <button  style={{background:"yellow"}} onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button><br></br>
              <button  style={{background:"red"}} onClick={()=>dispatch({type:"RESET"})}>RESET</button><br></br>
        
        </>
    )
}