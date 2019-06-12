import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './css/TopBar.css';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import Login from '../pages/Login';

@inject('login')
@observer
class TopBar extends Component {
    render() {
        const { login } = this.props;
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
                <li 
                    className="TopLogin"
                    onClick={login.OnOff}
                >
                    Login
                </li>
                <Link to="/setting">
                    <li className="TopSet">
                        Set
                    </li>
                </Link>
            </ul>
            <div>
                {login.value && <Login />}
            </div>
        </div>
        );
    }
}

export default observable(TopBar);