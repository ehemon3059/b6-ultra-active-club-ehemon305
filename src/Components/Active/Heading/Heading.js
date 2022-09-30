import React from 'react';
import './Heading.css';
import Icon from '../../images/active-time.png';

const Heading = () => {
    return (
        <div>
            <div className="heading">
                <img src={Icon} alt="" />
                <h1>My Active Time</h1>
            </div>
        </div>
    );
};

export default Heading;