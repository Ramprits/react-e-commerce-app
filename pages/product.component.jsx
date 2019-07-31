import React from 'react';
import ProductList from '../components/product/product-list/product-list.component';
class ProductPage extends React.Component {
  constructor() { super() }

  render() {
    return (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    )
  }
}

export default ProductPage;