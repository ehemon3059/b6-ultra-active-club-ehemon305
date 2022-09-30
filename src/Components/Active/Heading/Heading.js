import React from 'react';
import './Heading.css';
import Icon from '../../images/active-time.png';

const Heading = () => {
    return (
        <div>
            <div className="heading">
                <img src={Icon} alt="" />
                <h1>My Reading Time</h1>
              
            </div>
            <div className="sub-title">
            <h3>Time management for reading a book</h3>
            </div>
        
        </div>
    );
};

export default Heading;