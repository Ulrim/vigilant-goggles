import { observable, action } from 'mobx';

class LoginStore {
    @observable
    value = false;

    @action
    OnOff = () => {
        this.value === false ? 
            this.value = true : 
            this.value = false;
    }
}

export default LoginStore;