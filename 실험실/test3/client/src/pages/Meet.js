import React, { Component } from 'react';
import MeetBar from '../components/MeetBar';
import MeetSelect from '../components/MeetSelect';
import NavBar from '../components/NavBar';
import './css/Meet.css';
import TopBar from '../components/TopBar';
import Adv from '../components/Adv';
import { observer, inject } from 'mobx-react';
import { action, observable } from 'mobx';
import Socket from '../components/Socket';

@inject('states')
@observer
class Meet extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: false, // 로그인 여부
            unit: null
        }
    }

    // 마운트가 될 때 초기값 설정
    @action
    componentDidMount() {
        const { states } = this.props; // store states
        const { user, setUser } = states; // states 생략
        const socket = Socket('/');

        socket.on('getId', (data) => {
            const val = data;
            this.setState({unit: val});
        });
        setUser(user.id, 
            'Guest'+Math.floor(Math.random()*10000),
            '남자',
            null);

        console.log(user);
    }

    componentDidUpdate(){
        console.log('업데이트');
        this.props.states.user.id = this.state.unit;
    }
    render() {
        const { states } = this.props; // store states
        console.log('유저네임 : ' + states.user.id);  

        return (
            <div className="Meet">
                <div>
                    <TopBar />
                </div>
                <div className="MeetDisplay">
                    <MeetSelect />
                    <MeetBar />
                </div>
                <Adv />
                <NavBar />
            </div>
        );
    }
}

export default observable(Meet);