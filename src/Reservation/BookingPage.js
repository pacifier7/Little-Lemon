import AvailableTime from "./AvailableTime";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer, useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from '../Home'


export const  updateTimes = (Times, action) => {
    return Times;
}


export function BookingPage(){

    const [modal, setModal] = useState(false);
    <Routes>
      <Route path="/" element={<Home/>}/>
   </Routes>

    const toggleModal = () => {
        setModal(!modal);
      };
        //======================Addition=====================
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    //========================================================


    const initialTime = {availableTimes:  fetchAPI(new Date())}
   


    function submitForm (formData) {
        if (submitAPI(formData)) {
           toggleModal()
         
          //  navigate("/confirmed")
        }
    }


    const [Times, dispatch] = useReducer(updateTimes, initialTime);


    const navigate = useNavigate();
      function goHome(){
        navigate("/")
        toggleModal()
      }
  
    return(
      <>

    
       
       
    <BookingForm Times={Times} 
      submitForm={submitForm}/>
        
      {modal &&  (<ConfirmedBooking 
        toggleModal={toggleModal} goHome = {goHome}/>)}
         
    
    </>
    )
    }
    
  //  export default BookingPage;