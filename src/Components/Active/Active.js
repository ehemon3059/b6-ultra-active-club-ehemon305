import React, { useEffect, useState } from 'react';
import './Active.css'

import Activities from '../Activities/Activities';
import Calculatios from '../Calculatios/Calculatios';

const Active = () => {

const [myActivities, setMyActivity] = useState([]);

    const [cartDetails, setCart] = useState([]);




 useEffect(()=>{
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMyActivity(data));
 },[]);
    

  const handelAddToList = (selectedItem) => {
    //console.log(selectedItem);
    let newCart = [];
    const exists = cartDetails.find(
      (myActivity) => myActivity.id === selectedItem.id
    );
    if (!exists) {
      selectedItem.quantity = 1;
      newCart = [...cartDetails, selectedItem];
    } else {
      const rest = cartDetails.filter(
        (myActivity) => myActivity.id !== selectedItem.id
      );
      exists.quantity = exists.quantity + 1;

      newCart = [...rest, exists];
    }

  //  console.log(newCart)
    setCart(newCart);
   // addToDb(selectedItem.id);
  };




    return (
      <div className="active-container">
        <div className="activities-container">
          {myActivities.map((myActivity) => (
            <Activities
              key={myActivity.id}
              myActivity={myActivity}
              handelAddToList={handelAddToList}
            ></Activities>
          ))}
        </div>
        <Calculatios cartDetails={cartDetails}></Calculatios>
      </div>
    );
};

export default Active;