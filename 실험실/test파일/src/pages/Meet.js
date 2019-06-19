import React, { Component } from 'react';
import MeetBar from '../components/MeetBar';
import MeetSelect from '../components/MeetSelect';
import NavBar from '../components/NavBar';
import './css/Meet.css';
import TopBar from '../components/TopBar';
import Adv from '../components/Adv';
import { observer, inject } from 'mobx-react';

@inject('states')
@observer
class Meet extends Component {

    // 마운트가 될 때 초기값 설정
    componentDidMount() {
        const { states } = this.props;
        if(states.user.nickname === null) {
            states.setUser(
                'Guest',
                '손님' + Math.random(10),
                null,
                null
            );
            console.log('당신의 닉네임은'+states.user.nickname);
        } else {
            console.log('가입되어있음.');
        }
    }
    render() {
        const { states } = this.props;
        return (
            <div className="Meet">
                <div>
                    <TopBar />
                </div>
                <div className="MeetDisplay">
                    {states.user.gender === null ? 
                        <div>
                            닉네임 : {states.user.nickname}
                            성별 선택 : 
                                <input 
                                    value={this.value}
                                onChange={e => states.setUser(states.user.id, states.user.nickname, e.target.value, states.user.img)} />
                        </div> : console.log(states.user)
                    }
                    <MeetSelect />
                    <MeetBar />
                </div>
                <Adv />
                <NavBar />
            </div>
        );
    }
}

export default Meet;