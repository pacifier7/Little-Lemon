import React from 'react';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login'; 
import Reservation from './Reservation/Reservation';
import Nav from "./Nav";
import './App.css';
import restaurantfood from "./images/restauranfood.jpg";
import Card from 'react-bootstrap/Card';
import greekSalad from "./images/greeksalad.jpg";
import bruchetta from "./images/bruchetta.svg";
import lemmonDessert from "./images/lemonDessert.jpg";
import MarieAdrian from "./images/MarioAndAdrianb.jpg";
import EmptyStar from "./images/002-star-1.png";
import restaurantChefB from "./images/restaurantchefB.jpg";
import Button from 'react-bootstrap/Button';


function Home(){
   

  return (
    
    <div class="container1">

      
      < div class="hero">
        <p class="highlight">
          <p class="heroHead">Little Lemon</p>
          <p class="heroHead1">Chicago</p>
          <p class="heroFlex">
           We are a family owned
           Mediterranean Restaurant,
           Focused on Traditional
           Recipes Served with a Modern
           Twist.</p>
           <p>
           <Button variant="warning" class="buttons">Reserve a Table</Button>{' '}
           </p>
        </p>
        <img class="foodImg" src={restaurantfood} alt="Food" />
      </div>


      <div class="specials">
        <span>This Weeks Specials!</span>
        <Button variant="warning" class="buttons">Online menu</Button>{' '}
        
        <div class="cards">
        <Card  style={{ width: '15rem'}} id="Card">
          <Card.Img variant="top" src={greekSalad} id="CardImg"/>
          <Card.Body>
            <Card.Title>
              <span class="foodName">Greek salad</span>
              <span class="foodPrice">$12.99</span>
            </Card.Title>
            <Card.Text >
              <p>The famous greek salad of crispy lettuce, peppers,
                   olives and our Chicago style feta cheese, garnished
                  with crunchy garlic and rosemary croutons. 
              </p>
              <p class="Order">
                <b >Order a delivery  #1</b>
              </p>
            </Card.Text>
        
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }} id="Card1">
          <Card.Img variant="top" src={bruchetta} id="CardImg1"/>
          <Card.Body>
              <Card.Title>
              <span class="foodName">Bruchetta</span>
              <span class="foodPrice">$5.99</span>
              </Card.Title>
            <Card.Text>
            <p>Our Bruschetta is made from grilled bread 
              that has been smeared with garlic and seasoned 
              with salt and olive oil. 
              </p>
              <p class="Order">
                <b>Order a delivery  #2</b>
              </p>
            </Card.Text>
        
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', height: '28rem' }} id="Card2">
          <Card.Img variant="top" src={lemmonDessert} style={{height: '12.5vw'}} id="CardImg2" />
          <Card.Body>
            <Card.Title><span class="foodName">Lemon Dessert</span>
              <span class="foodPrice">$5.00</span></Card.Title>
            <Card.Text>
            This comes straight from grandma’s recipe book, 
            every last ingredient has been sourced and is as
             authentic as can be imagined.
             <p class="Order">
                <b>Order a delivery  #3</b>
              </p>
            </Card.Text>
        
          </Card.Body>
        </Card>
        </div>
      </div>
      <div class="testimonials">
         <h1 class="testimony">
          Testimonials
         </h1>
         <div class="boxes">
          <div class="box box1">
            <p style={{margin:'1vw'}}>Rating</p>
            
            <img class="Star" src={EmptyStar} alt="Star" style={{margin:'0 1vw 0 1vw'}} />
            <span>1</span>
          </div>
          <div class="box box2">
            <p style={{margin:'1vw'}}>Rating</p>
            <img class="Star" src={EmptyStar} alt="Star" style={{margin:'0 1vw 0 1vw'}} />
            <span>2</span>
          </div>
          <div class="box box3">
            <p style={{margin:'1vw'}}>Rating</p>
            <img class="Star" src={EmptyStar} alt="Star" style={{margin:'0 1vw 0 1vw'}} />
            <span>3</span>
          </div>
          <div class="box box4">
            <p style={{margin:'1vw'}}>Rating</p>
            <img class="Star" src={EmptyStar} alt="Star" style={{margin:'0 1vw 0 1vw'}} />
            <span>4</span>
          </div>
         </div>
      </div>

      <div class="aboutUs">
        <div>
          <h1 class="aboutUsHeader">
          Little Lemon
          </h1>
          <h2 class="aboutUsHeader1">
            Chicago
          </h2>
          <div>
          Nestled within the heart of the city, this Mediterranean 
          gem beckons with its warm, sun-kissed ambiance and 
          tantalizing aromas that dance through the air.
           A charming courtyard adorned with vibrant bougainvillea 
           welcomes patrons, setting the stage for an unforgettable
            culinary journey. As you step inside, 
            the rustic yet elegant decor captures the essence of the 
            Mediterranean, with terracotta hues, wrought-iron accents,
             and hand-painted tiles adorning the walls. 
             Soft, ambient music provides a soothing backdrop, 
             complementing the lively chatter of guests sharing 
             stories over sumptuous meals.
          </div>
        </div>
        <div>
        <img class="MarieAdrian" src={MarieAdrian} alt="Marie and Adrian" style={{margin:'0 1vw 0 1vw'}} />
        <img class="MarieAdrian1" src={restaurantChefB} alt="chef" style={{margin:'0 1vw 0 1vw'}} />
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Home;