import State from "./State";
import Props from "./Props";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Learningreact">LearningReact</Link></li>
                    <li> <Link to="/Contact">Contact</Link></li>
                </ul>
                
            </nav>
            <p>The Above Content is nav</p>
        </>
    );
}
export default Navbar;
