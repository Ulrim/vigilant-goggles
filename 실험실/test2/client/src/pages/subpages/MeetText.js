import React from 'react';
import ChatBorder from '../../components/ChatBorder';
import ChatBar from '../../components/ChatBar';
import ChatTopBar from '../../components/ChatTopBar';
import { inject, observer } from 'mobx-react';
import Socket from '../../components/Socket';


@inject('states')
@observer
class MeetText extends React.Component {
    componentDidMount() {
        const socket = Socket('/');
        
        if(this.props.states.user.nickname === null){
            alert("확인되는 아이디가 없습니다. 뒤로가기를 눌러주세요.");
        } else {
            console.log('아이디 확인됨');
            socket.on('connectToRoom', function(data){
                console.log(data);
            })
        }
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