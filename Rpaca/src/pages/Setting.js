import React from 'react';
import './css/Setting.css';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';
import Counter from '../Counter';

const Setting = () => {
    return (
        <div className="Setting">
            <TopBar />
                <div>
                    프로필 수정
                </div>
                <div>
                    비밀번호 수정
                </div>
                <div>
                    친구 관리
                </div>
            <NavBar />
            <Counter />
        </div>
    );
};

export default Setting;