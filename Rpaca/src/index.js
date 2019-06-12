import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
// MobX에서 사용하는 Provider
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './client/Root';
import CounterStore from './stores/counter';
import { Provider } from 'mobx-react'; // Mobx에서 사용하는 Provider
import LoginStore from './stores/LoginOnOff';

const counter = new CounterStore();
const login = new LoginStore();

ReactDOM.render(
    <Provider 
        counter={counter}
        login={login}
    >
        <Root />
    </Provider>
    , 
document.getElementById('root'));

serviceWorker.register();
