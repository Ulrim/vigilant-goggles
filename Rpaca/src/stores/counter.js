import { observable, action } from 'mobx';
import CounterStore2 from './counter2';

const counter2 = new CounterStore2();

export default class CounterStore {

    @observable
    number = counter2.number;

    @action
    increase = () => {
        this.number++;
    }

    @action
    decrease = () => {
        this.number--;
    }
}