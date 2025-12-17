
import Props from "./Props";
import State from "./State";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./UseCallback";
const Learningreact=()=>{
    return(
        <div>
            <h1>Learning react</h1>
            <p>This page is about learning react</p>
            <hr />
            <ol>
                <li>
                    <Props
                     hi="Welcome Props"
                     grade="12"
                     age="18"
                     img="vite.svg"
                    />
                    </li>
                    <li>
                    <State/>
                    </li>
                    <li>
                    <UseState/>
                    </li>
                    <li>
                    <UseEffect/>
                    </li>
                    <li>
                        <UseEffectAPI/>
                    </li>
                   <li>
                    <UseRef/>
                   </li>
                   <li><UseMemo/></li>
                    
                    
               
                <hr />
            </ol>
        </div>

    )
}
export default Learningreact;
