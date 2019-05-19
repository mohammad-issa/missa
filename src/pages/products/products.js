import React, { Component } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';

import './products.css';

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: 'Product 1'
        }, {
          name: 'Product 2'
        }
      ]
    }

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    return this.state.products.map((item, index) => {
      return <ProductCard key={index} item={item}/>
    })
  }

  render() {
    return (
      <div className='products-warpper'>
        <h1>Products</h1>
        <hr/>
        <div className='products-list'>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
