export const ParentComponent =()=>{
    return(
        <>
        <h1>Props Drilling </h1>
        <ChildComponent data="Grand Grand Child Component"/>

        </>
    )
}

const ChildComponent =({data})=>{
    return(
        <>
          <h1>Hello I am child !</h1>
          <GrandChildComponents data1={data}/>
        </>
    )
}

const GrandChildComponents=(props)=>{
   return(
    <>
         <h2>Hello I am GrandChildComponents</h2>
         <Grand_GrandChildComponents data2={props.data1}/>
    </>
   )

}


const Grand_GrandChildComponents =({data2})=>{
    return(
        <>
            <h3>Hello! i am :{data2}</h3>
        </>
    )
}