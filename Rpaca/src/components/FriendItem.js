import React from 'react';
import './css/FriendItem.css';

const FriendItem = () => {
    return (
        <div className="FriendItem">
            <div className="friendImg">
                이미지
            </div>
            <div className="name">
                닉네임
            </div>
            <div className="ChatGo">
                <div className="TextGo">Text</div>
                <div className="VoiceGo">Voice</div>
                <div className="VideoGo">Video</div>
            </div>
        </div>
    );
};

export default FriendItem;