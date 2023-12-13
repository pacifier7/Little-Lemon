import './App.css';
import Logo from "./images/Logo .svg";


function Footer() {
    return (
        <footer >
            <div class="footer">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <h3>Doormat Navigation</h3>
                    <li>
                        <ul>Home</ul>
                        <ul>About</ul>
                        <ul>Menu</ul>
                        <ul>Reservations</ul>
                        <ul>Order Online</ul>
                        <ul>Login</ul>
                    </li>

                </div>
                <div>
                    <h3>Contact</h3>
                    <li>
                        <ul>Address</ul>
                        <ul>Phone number</ul>
                        <ul>Email</ul>
                    </li>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <li>
                        <ul>Address</ul>
                        <ul>Phone number</ul>
                        <ul>Email</ul>
                    </li>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;