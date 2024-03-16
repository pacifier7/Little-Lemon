import './App.css';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import {BookingPage} from './Reservation/BookingPage';
import ConfirmedBooking from './Reservation/ConfirmedBooking';
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
        <Route path="/Reservation" element={<BookingPage/>}/>
      </Routes>
    
      <Routes>
        <Route path="/OrderOnline" element={<OrderOnline/>}/>
      </Routes>
   
      <Routes>
        <Route path="/Login" element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>

      <Routes>
      <Route path="/confirmed" element={<ConfirmedBooking/> } />
      </Routes>
    </>
  );
}

export default App;
