import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './css/ChatBar.css';
import Socket from './Socket';

const socket = Socket();

@inject('states')
@observer
class ChatBar extends Component {
    send (e) {
        e.preventDefault();

        socket.emit('message', {
            name: this.props.states.user.nickname,
            message: this.props.states.message
        })
        this.props.states.setMessage(''); // 입력 양식을 비웁니다.
    }

    render() {
        const { states } = this.props;

        return (
            <div className="ChatBar">
                {/* 이름: {state.user}<br /> */}
                <form 
                    className="subBar"
                    onSubmit={e => this.send(e)}
                >
                    <input
                    className="MsgInput"
                    value={states.message}
                    onChange={e => states.setMessage(e.target.value)} 
                    placeholder="send message"
                    />
                </form>
            </div>
        );
    }
}

export default ChatBar;