import './Booking.css';
import restaurant from "../images/restaurant.jpg";
import AvailableTime from './AvailableTime';
import { useState,useEffect } from 'react';


function BookingForm(props){
    
    const [bookDate, setBookDate] = useState(new Date());
  //  const [bookDateValid,setBookDateValid] = useState(false);
 //   const [bookTime, setBookTime] = useState("");
    const [guestNo, setGuestNo] = useState("");
   // const [guestNoValid,setGuestNoValid] = useState(false);
    const [firstName, setFirstName] = useState("");
   // const [firstNameValid,setFirstNameValid] = useState(false);
    const [lastName, setLastName] = useState("");
    //const [lastNameValid,setLastNameValid] = useState(false);
    const [email, setEmail] = useState("");
    //const [emailValid,setEmailValid] = useState(false);
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");
    //const [formValid,setFormValid] = useState(false);
    let bookDateValid = false; let guestNoValid = false; let firstNameValid = false; let lastNameValid = false;
    let emailValid = false; let formValid = false;

   function handleFormValid(){
   
let CurDate = new Date()
let EnterDate = new Date(bookDate)
  if (EnterDate.setHours(0,0,0,0) >= CurDate.setHours(0,0,0,0) ){bookDateValid = true;}
console.log("Cur Date: "+CurDate.setHours(0,0,0,0)+" Entered date is :"+EnterDate.setHours(0,0,0,0))
  if(Number(guestNo) > 0 ){guestNoValid = true}
console.log("number of guests: "+guestNo)
  if (firstName.length > 0){firstNameValid = true}

  if (lastName.length > 0){lastNameValid = true}

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
if (reg.test(email) === true){emailValid = true}

 
   return (bookDateValid && guestNoValid && firstNameValid && lastNameValid && emailValid);
    
   }

    const handleDateChange =(e) => {
            setBookDate(e.target.value)    
            handleFormValid()
    }

    const handleGuestNoChange =(e) => {
        setGuestNo(e.target.value)
        handleFormValid()
    }

    const handleFirstNameChange =(e) => {
        setFirstName(e.target.value)
        handleFormValid()
    } 

    const handleLastNameChange =(e) => {
        setLastName(e.target.value)
        handleFormValid()
    } 

    const handleEmail = (e)=> {
        setEmail(e.target.value)
        handleFormValid()
    }


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
                onChange = {handleDateChange}
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
                onChange = {handleGuestNoChange}
                type="number" placeholder="No of guests" min="1" max="10" id="guests" required></input>
            </div>

            <div>
                <label htmlFor="firstName">First Name <sup>*</sup></label>
                <input 
                value={firstName}
                onChange = {handleFirstNameChange}
                placeholder='First Name' id="firstName" required></input>
            </div>

            <div>
                <label htmlFor="lastName">Last Name <sup>*</sup></label>
                <input 
                value={lastName}
                onChange = {handleLastNameChange}
                placeholder='Last Name' id="lastName" required></input>
            </div>

            <div>
                <label htmlFor="email">Email <sup>*</sup></label>
                <input  
                value={email}
                onChange = {handleEmail}
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
            <input className="buttons" disabled={!handleFormValid()} type="submit" value="Make Your reservation"></input>
        </form>
     </div>
    </div>
    );
    }

    export default BookingForm;