import React from 'react';
import Profile from "../images/Untitled-1.jpg";
import './Calculatios.css';

const Calculatios = () => {
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
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                </div>
            </div>

            <div className="exercise-calculation">
            
            <div className="exercise-details">
                <h2>Exercise Details</h2>
                <div className="exercise-time-details">
                <h3>Exercise time</h3>
                <p>
                    2000 <small>second</small>
                </p>
                </div>
            </div>

            <div className="exercise-break-time-details">
                <h3>Break time</h3>
                <p>
                15 <small>second</small>
                </p>
            </div>

            </div>

          <div className="complete-button">
            <button>Activity Completed</button>
          </div>
        </div> 
      </div>
    );
};

export default Calculatios;