import React from 'react';
import './css/MyRoom.css';
import NavBar from '../components/NavBar';
import MyRoomItem from '../components/MyRoomItem';
import TopBar from '../components/TopBar';

const MyRoom = () => {
    return (
        <div className="MyRoom">
            <TopBar />
            <MyRoomItem />
            <NavBar />
        </div>
    );
};

export default MyRoom;