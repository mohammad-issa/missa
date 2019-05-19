import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './ProductCard.css';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.addToCart= this.addToCart.bind(this);
  }

  addToCart() {
    window['dataLayer'].push({
      event: 'areaClick',
      'event category': 'Template Area Interaction',
      'event action': 'Click',
      'event label': `${this.props.item.name} added to cart`
    });
  }

  render() {
    return (
      <div className='product-card'>
        <Link to={`/products/${this.props.item.id}/`} params={{ data: this.props.item }}><p>{this.props.item.name}</p></Link>

        <div>
          <button className='product-facebook'>Facebook</button>
          <button className='product-cart' onClick={this.addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}
