import React, { useState } from 'react';
import Profile from "../images/Untitled-1.jpg";
import './Calculatios.css';

const Calculatios = (props) => {
  const { cartDetails } = props;

  const [ state, setState ] = useState();

  
  const handleBreakTime = (event) => {
    const time = event.target.innerText;
    setState(time);
    
  };





  let total = 0;
  let shipping = 0;

  let quantity = 0;
  for (const item of cartDetails) {
    quantity = quantity + item.quantity;
    total = total + item.time * item.quantity;
    // shipping = shipping + item.shipping;
  }

  return (
    <div>
      <div className="calculation-container">
        <div className="profile-details">
          <img src={Profile} alt="" />

          <div className="name-details">
            <h4>Md Emran Hossain Emon</h4>
            <p>Jamalpur, Mymenshing</p>
          </div>
        </div>

        <div className="body-details">
          <div className="details-number">
            <p>
              <b>75</b> <small>Kg</small>
            </p>
            <p>
              <b>6.5</b> <small>inch</small>
            </p>
            <p>
              <b>25</b> <small>Years</small>
            </p>
          </div>
          <div className="details-text">
            <p>Weight</p>
            <p>Height</p>
            <p>Age</p>
          </div>
        </div>

        <div className="break-time">
          <h3>Add A Break</h3>
          <div className="break-details">
            <p onClick={(event) => handleBreakTime(event)}>10</p>

            <p onClick={(event) => handleBreakTime(event)}>20</p>
            <p onClick={(event) => handleBreakTime(event)}>30</p>
          </div>
        </div>

        <div className="exercise-calculation">
          <div className="exercise-details">
            <h2>Exercise Details</h2>
            <div className="exercise-time-details">
              <h3>Exercise time</h3>
              <p>
                {total} <small>second</small>
              </p>
            </div>
          </div>

          <div className="exercise-break-time-details">
            <h3>Break time</h3>
            <p>
              {state} <small>second</small>
            </p>
          </div>
        </div>

        <div className="complete-button">
          <button>Activity Completed</button>
        </div>
      </div>
    </div>
  );
};;

export default Calculatios;