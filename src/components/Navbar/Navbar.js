import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
        <h3 className="logo">AutoHub</h3>
        <ul className={isMobile? "nav-links-mobile": "nav-links"} 
        onClick={() =>setIsMobile(false)}
        >

        <Link to="/" className="admin">
            <li></li>
        </Link>

        <Link to="/customer" className="customer">
            <li>Customer</li>
        </Link>

        <Link to="/mechanic" className="mechanic">
            <li>Mechanic</li>
        </Link>

        <Link to="/request" className="request">
            <li>Request</li>
        </Link>

        <Link to="/feedback" className="feedback">
            <li>Feedback</li>
        </Link>

        <Link to="/profile" className="profile">
            <li>Profile</li>
        </Link>

        <Link to="/logout" className="logout">
            <li>Logout</li>
        </Link>



        </ul>
        <buttton className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ? (
                <i className="fas fa-times"></i>)
                : (
                    <i className="fas fa-bars"></i>)}
        </buttton>
        </nav>
    )
}

export default Navbar;
