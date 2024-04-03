import React, { useState } from "react";
import "./Modal.css";
import Button from 'react-bootstrap/Button';



function ConfirmedBooking(props){

    
      return(
        <>
      (
            <div className="overlay" onClick={props.toggleModal}></div>
                <div className="modal-content">
                <p>Booking confirmed</p>
                <Button variant="warning" onClick={props.goHome} class="buttons">Return Home</Button>
                
            </div>
           
      )
      </>
              
      );
}

export default ConfirmedBooking;