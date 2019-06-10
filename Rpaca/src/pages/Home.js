import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1> 여기는 홈이다 </h1>
            <h2> 들어올 준비가 되었는가?? </h2>
            <h3> 그렇다면 시작을 눌러라 </h3>
            <Link to="/meet">시작하자!</Link>
        </div>
    );
};

export default Home;