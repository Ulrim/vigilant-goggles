import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/MeetSelect.css';
import { inject, observer } from 'mobx-react';
import Socket from './Socket';

@inject('onoff')
@inject('states')
@observer
class MeetSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: Socket('/'),
            Wg: null,
        }
        console.log('constructor : ', this.state.socket, this.state.Wg);
    }

    componentDidMount(){
        console.log('componentDidMount : MeetSelect');

    }

    componentDidUpdate(){
        console.log('componentDidUpdate : MeetSelect');
    }
    

    send(e) {
        const { socket } = this.state;
        const { user, wishgender } = this.props.states;

        if(wishgender === null) {
            alert('원하는 성별을 고르거라');
            return e.preventDefault();
        }
        
        socket.emit('setUser', {
            id: user.id,
            nickname: user.nickname,
            gender: user.gender,
            wishgender: wishgender
        })

        console.log('Send()');
    }
    render() {
        console.log('reder() : ');
        return(
            <div className="MeetSelect">
                <Link to="/meet/text" 
                    className="MeetText"
                    onClick={e => this.send(e)}
                >
                    <div>
                        Text
                    </div>
                </Link>
                <Link to="/meet/voice" className="MeetVoice">
                    <div>
                        Voice
                    </div>
                </Link>
            </div>
        );
    }
}

export default MeetSelect;