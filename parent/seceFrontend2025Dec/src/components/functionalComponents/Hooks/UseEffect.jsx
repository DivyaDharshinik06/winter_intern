import { useEffect, useState } from 'react'
const UseEffect = () =>{
    var [text,updateText]=useState('');
    useEffect(()=>{console.log(text)},[text])
    return(
        <div>
            <h1>this is useEffect</h1>
            <input type="text" 
            value={text} 
            onChange={(e)=>{updateText(e.target.value)}}/>
        </div>
    )
}
export default UseEffect;