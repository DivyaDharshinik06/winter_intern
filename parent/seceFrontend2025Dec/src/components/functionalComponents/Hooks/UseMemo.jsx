import { useMemo } from 'react';
import { use, useState } from "react";
const slowFunction =(number)=>{
    for(let i=0;i<=1000000000;i++){}
    return number*2;
}
const UseMemo=()=>{
    const [number,setNumber]=useState(0);
    const [theme,setTheme]=useState(true)
    const styling   ={
        backgroundColor:theme?'black':'white',
        color:theme?'white':'black'
    };
    
    const doubleNumber=useMemo(()=>{slowFunction(number)},[number])
    return(
        <div style={styling}>
            <h1 >UseMemo</h1>
            <input type="number" value={number} />
            <button onClick={()=>{setNumber(number+1)}}>+</button>
            <h3> Number is {number}</h3>
            <button onClick={()=>{setTheme(!theme)}}>Change Theme</button>
        </div>
    )
}
export default UseMemo;