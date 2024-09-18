// import React,{ useRef,useId } from "react"

// export const ForwardRef = ()=>{

//     const username=useRef();
//     const password=useRef();
//     const hanlderForm =(e)=>{
//         e.preventDefault();
//           console.log(username.current.value,password.current.value)
//     }

//     return(
//         <>

//            <form onSubmit={hanlderForm}>

//            <BeforeReact19 label="username" ref={username}/>
//            <BeforeReact19 label="password" ref={password}/>
//            <Button>Click me </Button>
//            </form>
//         </>
//     )
// }

// const BeforeReact19 =React.forwardRef((props,refValue)=>{
//     const id=useId();
//     return(
//         <>
        
//             <label htmlFor={id}>
//                 {props.label}:
//                 <input type="text" placeholder="enter usernamee" ref={refValue}></input>
//             </label>
//         </>
//     )
// })

import React, { useRef, useId } from "react";

// ForwardRef component definition
const BeforeReact19 = React.forwardRef((props, ref) => {
    const usernameid = useId(); // Generate a unique ID

    return (
        <>
            <label htmlFor={usernameid}>
                {props.label}:
                <input type="text" id={usernameid} placeholder={`Enter ${props.label}`} ref={ref} /><br></br>
            </label>
        </>
    );
});

export const ForwardRef = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value);
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <BeforeReact19 label="username" ref={usernameRef} />
                <BeforeReact19 label="password" ref={passwordRef} />
                <button type="submit">Click me</button>
            </form>
        </>
    );
};
