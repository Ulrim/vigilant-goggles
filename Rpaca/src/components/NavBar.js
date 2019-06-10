import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <Link to="/meet">
                    <li>
                        Meet
                    </li>
                </Link>
                <Link to="/friend">
                    <li>
                        Friend
                    </li>
                </Link>
                <Link to="/MyRoom">
                    <li>
                        MyRoom
                    </li>
                </Link>
                <Link to="/OpenRoom">
                    <li>
                        OpenRoom
                    </li>
                </Link>
                <Link to="/setting">
                    <li>
                        Set
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default NavBar;