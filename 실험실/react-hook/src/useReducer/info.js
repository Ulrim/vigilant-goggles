// import React, { useState, useEffect } from 'react';
import React, { useReducer } from 'react';
// import './info.css';

// 추가
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // });

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickName = e => {
    //     setNickname(e.target.value);
    // };

    return (
        <div className="info">
            <div className="box1">
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
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