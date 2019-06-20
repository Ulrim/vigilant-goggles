import React from 'react';
import ChatBorder from '../../components/ChatBorder';
import ChatBar from '../../components/ChatBar';
import ChatTopBar from '../../components/ChatTopBar';
import { inject, observer } from 'mobx-react';
import Socket from '../../components/Socket';

@inject('states')
@observer
class MeetText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            unit: null,
        }
    }
    componentDidMount() {
        const socket = Socket('/');
        const { states } = this.props;

        socket.on('getId', (data) => {
            const val = data;
            this.setState({unit: val});
        });

        if(states.user.id === null){
            alert("확인되는 아이디가 없습니다. 뒤로가기를 눌러주세요.");
            console.log(states.user.id);
        } else {
            socket.emit('setUser', states.user);
            console.log('아이디 확인됨');
        }
    }

    componentDidUpdate(){
        console.log('업데이트');
        this.props.states.user.id = this.state.unit;
    }
    render() {
        return(
            <div>
                <ChatTopBar />
                <ChatBorder />
                <ChatBar />
            </div>
        );
    }
}

// const MeetText = () => {
    
//     return (
//         <div>
//             <ChatTopBar />
//             <ChatBorder />
//             <ChatBar />
//         </div>
//     );
// };

export default MeetText;