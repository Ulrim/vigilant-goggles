import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
// MobX에서 사용하는 Provider
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './client/Root';
import CounterStore from './stores/counter';
import { Provider } from 'mobx-react'; // Mobx에서 사용하는 Provider
import OnOffStore from './stores/OnOff';

const counter = new CounterStore();
const onoff = new OnOffStore();

ReactDOM.render(
    <Provider 
        counter={counter}
        onoff={onoff}
    >
        <Root />
    </Provider>
    , 
document.getElementById('root'));

serviceWorker.register();
