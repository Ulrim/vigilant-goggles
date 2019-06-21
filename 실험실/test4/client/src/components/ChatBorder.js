import React, { Component } from 'react';
import Socket from './Socket';
import './css/ChatBorder.css';
import { inject, observer } from 'mobx-react';
import { action, observable } from 'mobx'; 

@inject('states')
@observer
class ChatBorder extends Component {
    constructor (props) {
        super(props);
        this.state = {
          logs: [],
          socket: Socket('/'),
          message: null
        };
      }

      // 컴포넌트가 마운트됐을 때

      @action
      componentDidMount () {
        console.log('componentDidMount : ChatBorder');
        const { socket } = this.state;
        // 실시간으로 로그를 받게 설정

        socket.on('message', (obj) => {
          const logs2 = this.state.logs;
          logs2.push(obj); // 로그에 추가하기
          logs2.key = 'key_' + (this.state.logs.length + 1);
          this.setState({logs: logs2});
        })

        socket.on('connectToRoom', (data) => {
          this.setState({ message: data});
        })
      }

      @action
      componentDidUpdate() {
        console.log('componentDidUpdate : ChatBorder');
      }

      render () {
        const { states } = this.props;

        // 로그를 사용해 HTML 요소 생성 --- (※6)
        const messages = this.state.logs.map(e => (
          e.name === states.user.nickname ? 
          (<div 
            key={e.key} 
            className="MyChatItems"
          >
            <div className="Item">
              <span>{e.name}</span>
              <span >: {e.message}</span>
            </div>
          </div>) : (
            <div 
            key={e.key} 
            className="ChatItems"
          >
            <div className="Item">
              <span>{e.name}</span>
              <span >: {e.message}</span>
            </div>
          </div>
          )
        ));

        return (
          <div className="ChatBorder">
            <div className="ChatList">
              <div className="ChatItems">
                {this.state.message}
              </div>
              {messages}
            </div>
          </div>
        )
    }
}

export default observable(ChatBorder);