import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './Modal';
import Home from './Home';

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if ( 
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
        console.log(this.previousLocation);
      this.previousLocation = this.props.location;
    }
  }
  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
        </Switch>
        {isModal ? <Route path="/about" component={Modal} /> : null}
      </div>
    );
  }
}

function ModalEnd() {
    return (
        <Router>
            <Route component={ModalSwitch} />
        </Router>
    );
}

export default ModalEnd;