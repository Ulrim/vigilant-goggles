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

@inject('onoff')
@inject('states')
@observer
class Meet extends Component {
    constructor(props){
        console.log('--- Meet 페이지 ---');
        super(props);
        this.state = {
            login: false, // 로그인 여부
            unit: null,
            socket: Socket('/')
        }
        console.log('constructor : ', this.state.login, this.state.unit);
    }

    // 마운트가 될 때 초기값 설정
    @action
    componentDidMount() {
        const { states } = this.props; // store states
        const { user, setUser } = states; // states 생략
        const { socket } = this.state;

        socket.on('getId', (data) => {
            const val = data;
            this.setState({unit: val});
        });

        if(user.nickname === null){
            setUser(user.id, 
                'Guest'+Math.floor(Math.random()*10000),
                '남자',
                null);
        }

        console.log('componentDidMount : ' + user.id, user.nickname, user.gender, user.img);
    }

    componentDidUpdate(){
        const { user } = this.props.states;

        user.id = this.state.unit;
        console.log('componentDidUpdata', user.id, user.nickname, user.gender, user.img);
    }

    @action
    render() {
        const { user } = this.props.states;
        console.log('render : ' + user.id, user.nickname, user.gender, user.img);

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