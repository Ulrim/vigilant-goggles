import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={{
            pathname : "/about",
            state: { modal : true }
            }}>
                하하
            </Link>
        </div>
    );
};

export default Home;