import { observable, action } from 'mobx';

class OnOffStore {
    @observable
    value = false;

    @action
    OnOff = () => {
        this.value === false ? 
            this.value = true : 
            this.value = false;
    }

    @observable
    genderValue = false;

    @action
    genderOnOff = () => {
        this.genderValue === false ? 
            this.genderValue = true : 
            this.genderValue = false;
    }

    @observable
    interestValue = false;

    @action
    interestOnOff = () => {
        this.interestValue === false ? 
            this.interestValue = true : 
            this.interestValue = false;
    }

}

export default OnOffStore;