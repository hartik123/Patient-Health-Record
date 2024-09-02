import React from "react";
import TestLogo from "../images/TestLogo/TestLogo.jpg"
// import Home from "../images/icons/HealthCareDashboard/home.jpg"
import Group from "../images/icons/group/group.jpg"
import Calendar from "../images/icons/calendar/calendar.jpg"
import Message from "../images/icons/chat/chat.jpg"
import Transactions from "../images/icons/transactions/transactions.jpg"
import "./Header.css"


const Header = () => {
    return (
        <div className="header-style">
            <div className="d-flex justify-content-between align-items-center section-curving-header" >
            <div>
                <img src={TestLogo} alt="Logo" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                {/* <div>
                    <img src={Home} alt="Home" />
                    <div className="header-text-style">Overview</div>
                </div> */}
                <div>
                    <img src={Group} alt="Group" />
                    <div className="header-text-style">Patients</div>
                </div>
                <div>
                    <img src={Calendar} alt="Calendar" />
                    <div className="header-text-style">Schedule</div>
                </div>
                <div>
                    <img src={Message} alt="Message" />
                    <div className="header-text-style">Message</div>
                </div>
                <div>
                    <img src={Transactions} alt="Transactions" />
                    <div className="header-text-style">Transactions</div>
                </div>
            </div>
            <div style={{width:"100px"}}>
                
            </div>
        </div>
        </div>
    );
};

export default Header;