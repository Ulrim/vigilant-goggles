import React from 'react';
import ContextSample from './ContextSample';
import Counter from './useReducer/Counter';
import Info from './useReducer/info';
import Average from './Average';

const App2 = () => {
    return (
        <div>
            <Info />
            <ContextSample />
            <Counter />
            <Average />
        </div>
    );
};

export default App2;