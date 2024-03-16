import React, { useState } from "react";
import "./Modal.css";



function ConfirmedBooking(props){

    
      return(
        <>
      (
            <div className="overlay" onClick={props.toggleModal}></div>
                <div className="modal-content">
                <p>Booking confirmed</p>

                <button className="close-modal" onClick={props.goHome}>
                  CLOSE
                 </button> 
            </div>
           
      )
      </>
              
      );
}

export default ConfirmedBooking;