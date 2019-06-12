import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class Counter extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>Mobx Test</h1>
                <h2>{counter.number}</h2>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        );
    }
}

export default Counter;