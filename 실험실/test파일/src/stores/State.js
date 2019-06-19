import { observable, action }from 'mobx';

class State {
    @observable user = {
        id: null,
        nickname: null,
        gender: null,
        img: null
    }
    @observable message = null;
    @observable room = null;

    @action
    setUser = (id, nickname, gender, img) => {
        this.user.id = id;
        this.user.nickname = nickname;
        this.user.gender = gender;
        this.user.img = img;
    }

    @action
    setMessage = (val) => {
        this.message = val;
    }
}

export default State;