import React, { useEffect, useRef, useState } from 'react';
import Profile from "../images/Untitled-1.jpg";
import './Calculatios.css';
import Toast from '../Toast/Toast';




const TostType = {
  success: "success",
  fail: "fail",
};

const Calculatios = (props) => {
  const { cartDetails } = props;


  const [saveTime , setSaveTime]= useState(0);

  
  const handleBreakTime = (event) => {
    const time = event.target.innerText;
   
 
   localStorage.setItem('myTime', JSON.stringify(time))

   setSaveTime(time)
    
  };


  useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('myTime'));

    if (items) {
      setSaveTime(items);
     }

  },[saveTime]);


//   useEffect(()=>{
//     const storedTime = localStorage.getItem('myTime');

//   if (storedTime) {
//     setState(storedTime);
//    }

//  },[])




  let total = 0;
  let shipping = 0;

  let quantity = 0;
  for (const item of cartDetails) {
    quantity = quantity + item.quantity;
    total = total + item.time * item.quantity;
    // shipping = shipping + item.shipping;
  }

  const toastBarRef = useRef(null) 
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
              <h4>Reading Time</h4>
              <p>
                {total} <small>minutes</small>
              </p>
            </div>
          </div>

          <div className="exercise-break-time-details">
            <h4>Break time</h4>
            <p>
              {saveTime} <small>minutes</small>
            </p>
          </div>
        </div>

        <div className="complete-button">
          <button onClick={() =>{toastBarRef.current.show();}}>Activity Completed</button>
          <Toast ref={toastBarRef} message="Activity Completed !" type={TostType.success}></Toast>
        </div>
      </div>
    </div>
  );
};;

export default Calculatios;