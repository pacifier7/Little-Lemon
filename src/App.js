import './App.css';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Reservation from './Reservation/Reservation';
import Nav from "./Nav";
import Home from "./Home";


function App() {
  let component = <Home />
  console.log(window.location.pathname);
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/About":
      component = <About />
      break
    case "/Menu":
      component = <Menu />
      break
    case "/Reservation/Reservation":
      component = <Reservation />
      break
    case "/OrderOnline":
      component = <OrderOnline />
      break
    case "/Login":
      component = <Login />
      break
    default:
      component = <Home />
  }

  return (
    <>
     <Nav/>
     <main>{component}</main>
     <Footer/>
    </>
  );
}

export default App;
