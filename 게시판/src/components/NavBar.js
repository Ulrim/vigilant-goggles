import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="title">
                개드립잉
            </div>
            <ul>
                <li>
                    <Link to="/sub01">
                        sub 01
                    </Link>
                </li>
                <li>
                    <Link to="/sub02">
                        sub 02
                    </Link>
                </li>
                <li>
                    <Link to="/sub03">
                        sub 03
                    </Link>
                </li>
                <li>
                    <Link to="/sub04">
                        sub 04
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;