import { useEffect,useState } from "react";
import '../App.css';
export default function Count(){
    const[count, setCount] =useState({value:0,color:'white'})
    useEffect(()=>{console.log(`the count is ${count.value}`)},[count])
    
    return(
        <>
        <h1>Count: {count.value}</h1>
        <button style={{backgroundColor:count.color}} onClick={()=>setCount({value:count.value+1,color:'green'})}>Increment</button>
         <button style={{backgroundColor:count.color}}  onClick={()=>setCount({value:count.value-1,color:'red'})}>Decrement</button>
        
        </>
    )
}