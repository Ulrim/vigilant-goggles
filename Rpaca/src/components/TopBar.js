import React from 'react';
import { Route, Link } from 'react-router-dom';
import './css/TopBar.css';

const TopBar = () => {
    const Child = ({ match }) => {
        return (
            <>
                {match.params.id}
            </>
        );
    };

    return (
        <div className="TopBar">
            <ul>
                <li className="TopIng">
                    <Route path="/:id" component={Child} />
                </li>
                <li className="TopName">
                    Hi! Id
                </li>
                <Link to="/Login">
                    <li className="TopLogin">
                        로그인
                    </li>
                </Link>
                <Link to="/setting">
                    <li className="TopSet">
                        Set
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default TopBar;