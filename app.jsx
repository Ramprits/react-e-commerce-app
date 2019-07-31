import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/home.component';
import ContactPage from './pages/contact.component';
import NavbarComponent from './components/navbar.component';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <NavbarComponent />
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;