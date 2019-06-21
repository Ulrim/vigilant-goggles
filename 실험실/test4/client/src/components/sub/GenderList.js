import React, { Component } from 'react';
import './css/GenderList.css';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject('states')
@inject('onoff')
@observer
class GenderList extends Component {
    componentDidMount() {
        console.log('componentDidMount : GenderList');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate : GenderList');
    }

    @action
    send(e){
        const { onoff, states } = this.props;

        if(onoff.genderFemaleValue === true && onoff.genderMaleValue === true) {
            states.wishgender = ['Female', 'Male'];
            console.log('1번 if : ', states.wishgender);
        } else if (onoff.genderFemaleValue === false && onoff.genderMaleValue === true) {
            states.wishgender = 'Male';
            console.log('2번 if : ', states.wishgender);
        } else if (onoff.genderFemaleValue === true && onoff.genderMaleValue === false) {
            states.wishgender = 'Female';
            console.log('3번 if : ', states.wishgender);
        }

        console.log('send() : GenderList');
    }

    render() {
        console.log('render : GenderList');
        const { onoff } = this.props;

        return (
        <div className="GenderList">
            <div className="main">
                <div className="close" onClick={onoff.genderOnOff}>
                    <div>close</div>
                </div>
                <div className="select">
                    <input type="checkbox" 
                        id="female" 
                        className="female" 
                        defaultChecked={onoff.genderFemaleValue}
                        onClick={e => this.send(e)}
                    />
                    <label htmlFor="female" onClick={onoff.genderFemaleOnOff}>Female</label>
                </div>
                <div className="select">
                    <input type="checkbox" 
                        id="male" 
                        className="male" 
                        defaultChecked={onoff.genderMaleValue}
                        onClick={e => this.send(e)}
                    />
                    <label htmlFor="male" onClick={onoff.genderMaleOnOff}>male</label>
                </div>
            </div>
        </div>
        );
    }
}

export default observable(GenderList);