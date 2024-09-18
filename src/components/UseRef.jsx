import { useRef,useId } from "react";

export const UseRef = ()=>{

     const username=useRef(null);

    //  useRef return object with one propeties current ,basically we use it for uncontrolled component 
     const password=useRef(null);    
    const handlerInput=(event)=>{
        event.preventDefault();
        // console.log(event.target.value)
        console.log(username.current.value,password.current)
    }
    const id=useId();
return(
        <>
       
        <h1>dfdsa</h1>
            <form onSubmit={handlerInput}>
                <label htmlFor={id +"username"}>
                    username:
                    <input type="text" id={id +"username"} ref={username} placeholder="enter your username"></input><br></br>

                </label>

                <label>
                    password:
                    <input type="password" id={id + "password"} ref={password} placeholder="enter your password "></input><br></br>

                </label>

                <button type="submit">Click me</button>
            </form>
        </>
    )
}