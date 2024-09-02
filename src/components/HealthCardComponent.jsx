import React from 'react';
import './HealthCard.css'; 

const HealthCardComponent = ({ icon, title, value, unit, status, statusClass, val }) => {
    return (
        <div className={`health-card ${statusClass}`}>
            <div className="icon-container">
                <img src={icon} alt={title} className="icon" style={{width:"96px", height:"96px", borderRadius:"50%"}} />
            </div>
            <div className="health-info">
                <h3>{title}</h3>
                <h2>{Math.floor(val)} {unit}</h2>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default HealthCardComponent;
