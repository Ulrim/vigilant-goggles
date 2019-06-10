import React from 'react';
import './css/MeetBar.css';

const MeetBar = () => {
    return (
        <div className="MeetBar">
            <div className="WishGender">
                <input type="checkbox" id="wish" className="btn"></input>
                <label htmlFor="wish" className="name">
                    <h2>Wish gender</h2>
                </label>
                <label for="wish" className="closer"></label>

                <div className="WishSub">
                    <input type="checkbox" id="Male" className="Male"></input>
                    <label htmlFor="Male" className="InMale">
                        Male
                    </label>
                    <input type="checkbox" id="Female" className="Female"></input>
                    <label htmlFor="Female" className="InFemale">
                        Female
                    </label>
                </div>
            </div>
            <div className="Interest">
                <h2>Interest</h2>
                <input type="text" id="Interest" className="checkText"></input>
            </div>
        </div>
    );
};

export default MeetBar;