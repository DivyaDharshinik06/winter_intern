import Home from './components/functionalComponents/Home';
import About from './components/functionalComponents/About';
import Learningreact from './components/functionalComponents/Learningreact';
import Contact from './components/functionalComponents/Contact';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Login from "./Login";
import "./App.css"
import ClassComponent from "./ClassComponent";
import Navbar from "./components/functionalComponents/Navbar";

function App() {
 const h1Style={
background:"lightgreen",
  width:"100%",
  height:"100px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  fontSize:"30px",
  fontweight:"bold",
  textAlign:"center",
  textTransform:"uppercase",
  textShadow:"2px 2px 4px rgba(0,0,0,0.5)",
  textcolor:"lightpink"
 };
  return (
    <header>
       <div>
      <h1 style={h1Style}>Welcome to learn JSX</h1>
      <h2 className="h2" >This is a simple ReactComponent</h2>
      <ClassComponent />
      <img src="vite.svg" alt="random image" style={{marginLeft:"100px",width:"500px",height:"500px"}} />
      </div>
      
      <Router>
        <nav>
      <Navbar />
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Learningreact" element={<Learningreact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
      </Router>
      
   
    </header>
  );
}

export default App
