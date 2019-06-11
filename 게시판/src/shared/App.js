import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Sub01, Sub02, Sub03, Sub04 } from '../pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/sub01" component={Sub01} />
        <Route path="/sub02" component={Sub02} />
        <Route path="/sub03" component={Sub03} />
        <Route path="/sub04" component={Sub04} /> 
      </div>
    );
  }
}

export default App;
