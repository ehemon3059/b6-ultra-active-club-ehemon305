import React from 'react';
import './Activities.css'

const Activities = ({ myActivity, handelAddToList }) => {
  const { picture, ExName, about, time } = myActivity;

  return (
    <div>
      

      <div className="myActivity">
        <img src={picture} alt=""></img>
        <div className="activity-details">
          <p className="Exercise-name"> <b>{ExName}</b>  </p>
          <p><b>Book Details:</b> <small>{about}</small> </p>
          <p> <b>Time required :</b>  {time}</p>
        </div>
        <button className="btn-cart">
          <p className="btn-text" onClick={() => handelAddToList(myActivity)}>
            Add to list
          </p>
        </button>
      </div>
    </div>
  );
};

export default Activities;