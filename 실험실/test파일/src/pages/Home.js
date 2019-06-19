import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="TopBar2">
                <div className="title">Welcome to Zakaranda</div>
            </div>
            <div className="mainPage">
                <div className="desc">
                    <div> Comming Soon </div>
                    <div> [ Free Random Chat Service ] </div>
                    <div> Open Beta : 19.06.30 ~ </div>
                    <div>  ↓ Open Beta ↓ </div>
                    <div>   random Text Chat </div>
                    <div>  ↓ To be updated ↓ </div>
                    <div>   * Matching system * </div>
                    <div>   wish gender </div>
                    <div>   select interest </div>
                    <div>   * Chat system * </div>
                    <div>   random voice Chat </div>
                    <div>   friend Chat </div>
                    <div>   Open room Chat </div>
                </div>
                <div className="footer">
                    <div>
                        Developer : Ulrim, 2KJ
                    </div>
                    <div>
                        Get In Touch With Us : kjs100184@gmail.com
                    </div>
                </div>
                <Link to="/meet" >
                    안녕하소
                </Link>
            </div>
        </div>
    );
};

export default Home;