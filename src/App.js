import './App.css';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Reservation from './Reservation/Reservation';
import Nav from "./Nav";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";


function App() {
 

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
      <Routes>
        <Route path="/About" element={<About/>}/>
      </Routes>
    
      <Routes>
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>

      <Routes>
        <Route path="/Reservation" element={<Reservation/>}/>
      </Routes>
    
      <Routes>
        <Route path="/OrderOnline" element={<OrderOnline/>}/>
      </Routes>
   
      <Routes>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
