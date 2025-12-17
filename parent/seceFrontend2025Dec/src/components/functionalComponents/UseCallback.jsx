import { useEffect, useState } from 'react'
const UseCallback=()=>{
    const [count,setCount]=useState(0);
    const [theme,setTheme]=useState(false);
    const styling={
        backgroundColor:theme?'black':'white',
        color:theme?'white':'black'
    }
    useEffect(()=>{
        console.log("Theme changed")
    },[theme])

    return(
        <div style={styling}>
            <h1>Usecallback hook</h1>
            <button onClick={setTheme(!theme)}>Toogle Theme</button>
            <p>callbackHook</p>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <p>The number is {count} </p>
        </div>
    )
}
export default UseCallback;