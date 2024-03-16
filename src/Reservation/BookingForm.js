import './Booking.css';
import restaurant from "../images/restaurant.jpg";
import AvailableTime from './AvailableTime';
import { useState } from 'react';


function BookingForm(props){
    
    const [bookDate, setBookDate] = useState(new Date());
 //   const [bookTime, setBookTime] = useState("");
    const [guestNo, setGuestNo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        };

    return(
    <div className="bookContainer">
        <div className="loyalty">
            <p className="banner">
                BOOK A TABLE AND EARN LOYALTY POINTS AND BONUS.
            </p>
            <img className ="resImg" src={restaurant} alt="Food" />
      </div> 
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="formStructure" style={{display: "grid","maxWidth": "200px", gap: "20px"}}>
            <div >
                <label htmlFor="res-date">Choose date <sup>*</sup></label>
                <input value= {bookDate}
                onChange = {(e)=>setBookDate(e.target.value)}
                type="date" id="res-date" required></input>
            </div>

            <div>
                <label htmlFor="res-time">Choose time <sup>*</sup></label>
                <AvailableTime Times={props.Times}/>
            </div>

            <div>
                <label htmlFor="guests">Number of guests <sup>*</sup></label>
                <input
                value={guestNo}
                onChange = {(e)=>setGuestNo(e.target.value)}
                type="number" placeholder="No of guests" min="1" max="10" id="guests" required></input>
            </div>

            <div>
                <label htmlFor="firstName">First Name <sup>*</sup></label>
                <input 
                value={firstName}
                onChange = {(e)=>setFirstName(e.target.value)}
                placeholder='First Name' id="firstName" required></input>
            </div>

            <div>
                <label htmlFor="lastName">Last Name <sup>*</sup></label>
                <input 
                value={lastName}
                onChange = {(e)=>setLastName(e.target.value)}
                placeholder='Last Name' id="lastName" required></input>
            </div>

            <div>
                <label htmlFor="email">Email <sup>*</sup></label>
                <input  
                value={email}
                onChange = {(e)=>setEmail(e.target.value)}
                placeholder='Email' type="email" id="email" required></input>
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label>
                    <select 
                    value={occasion}
                    onChange = {(e)=>setOccasion(e.target.value)}
                    id="occasion">
                        <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <div>
                <label htmlFor="comment">Comments (Optional)</label>
                <textarea
                value={comment}
                onChange = {(e)=>setComment(e.target.value)}
                id="comment" rows="4" cols="30"></textarea>
            </div>
            <input className="buttons" type="submit" value="Make Your reservation"></input>
        </form>
     </div>
    </div>
    );
    }

    export default BookingForm;