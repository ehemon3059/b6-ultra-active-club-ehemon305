import React from 'react';
import './Active.css'

import Activities from '../Activities/Activities';
import Calculatios from '../Calculatios/Calculatios';

const Active = () => {


    


    return (
      <div className="active-container">
        <div className="activities-container">
          <Activities></Activities>
        </div>
        <Calculatios></Calculatios>
      </div> 
    );
};

export default Active;