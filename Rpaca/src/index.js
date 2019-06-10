import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
// MobX에서 사용하는 Provider
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './client/Root';

ReactDOM.render(<Root />, 
document.getElementById('root'));

serviceWorker.register();
