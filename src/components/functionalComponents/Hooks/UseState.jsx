import { useState } from "react";

const UseState=()=>{
    const [number,updateNumber]=useState(0);
    const SubTract=()=>{updateNumber(number-1)};
    const Add=()=>{updateNumber(number+1)};
    const Reset=()=>{updateNumber(0)}
    const [text,updateText]=useState("");
    const resetText=()=>{updateText("")};
    
    return(
        <div>
            <h1>UseState</h1>
            <button onClick={Add}>+</button>
            <input type="number" value={number}/>
             <button onClick={SubTract}>-</button>
            <button onDoubleClick={Reset}>Reset</button>
            <br/>
            <h2>Text Typing</h2>
            <input type="text" value={text} onChange={(e)=>updateText(e.target.value)}/>
            <button onDoubleClick={resetText} >Reset</button>

            
        </div>
    )
}
export default UseState;