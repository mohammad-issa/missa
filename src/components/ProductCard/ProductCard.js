import React, { Component } from 'react';

import './ProductCard.css';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.shareWithFB= this.shareWithFB.bind(this);
    this.addToCart= this.addToCart.bind(this);
  }

  shareWithFB() {
    alert('share with facebook');
  }

  addToCart() {
    alert('add to cart');
  }

  render() {
    return (
      <div className='product-card'>
        <p>{this.props.item.name}</p>
        <div>
          <button onClick={this.shareWithFB}>Facebook</button>
          <button onClick={this.addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}
