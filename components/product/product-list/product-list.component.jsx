import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from '../product-item/product-item.component';
import Loading from '../../loading/loading.component';

import { Row, Col } from 'reactstrap'

class ProductList extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://pacific-reef-60955.herokuapp.com/products').then(res => this.setState({ products: res.data }))
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          {this.state.products ? this.state.products.map(({ _id, ...product }) => (
            <Col className="col-md-4 mt-3">
              <ProductItem key={_id} {...product} />
            </Col>
          )) : <Loading loading="Please wait while loading..." />}
        </Row>
      </React.Fragment>
    )
  }
}

export default ProductList;