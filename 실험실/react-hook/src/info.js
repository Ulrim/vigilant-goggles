import React, { useState, useEffect } from 'react';
import './info.css';

const Info = () => {
    const [name, setName] = useState('');

    // useEffect(()=>{
    //     console.log(name);
    // }, [name]);

    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickname(e.target.value);
    };

    return (
        <div className="info">
            <div className="box1">
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div className="name">
                    <b>이름:</b> {name}
                </div>
                <div className="nickname">
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;