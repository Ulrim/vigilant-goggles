import React from 'react';
import { Link, Route } from 'react-router-dom';
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
                <Link to={{
                    pathname: "/Login",
                    state: { modal: true }
                }} >
                    <li className="TopLogin">
                        로그인
                    </li>
                </Link>
                <li className="TopSet">
                    설정
                </li>
            </ul>
        </div>
    );
};

export default TopBar;