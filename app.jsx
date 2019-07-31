import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Container } from 'reactstrap';
import HomePage from './pages/home.component';
import ContactPage from './pages/contact.component';
import ProductPage from './pages/product.component';
import NavbarComponent from './components/navbar/navbar.component';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <NavbarComponent />
        <Container className="mt-4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/products" component={ProductPage} />
          </Switch>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;