import React, { Component } from 'react';
import { Link } from "react-router-dom";
import facebookIcon from '../../assets/images/facebook.png';

import './ProductCard.css';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.addToCart= this.addToCart.bind(this);
    this.shareWithFacebook= this.shareWithFacebook.bind(this);
  }

  addToCart() {
    console.log('added to cart');
    // window['dataLayer'].push({
    //   event: 'areaClick',
    //   'event category': 'Template Area Interaction',
    //   'event action': 'Click',
    //   'event label': `${this.props.item.name} added to cart`
    // });
  }

  shareWithFacebook() {
    alert(`${this.props.item.name} has shared to facebook.`)
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.item.thumbnail})`
    }
    const icon = {
      backgroundImage: `url(${facebookIcon})`
    }
    return (
      <div className='product-card'>
        <div className='product-thumbnail' style={style}></div>
        <div className='product-info'>
          <p className='product-title'>
            <Link to={`/products/${this.props.item.id}/`} params={{ data: this.props.item }}><span>{this.props.item.name}</span></Link>
          </p>
          <div className='product-buttons'>
            <button className='product-cart' onClick={this.addToCart}>Add to cart</button>
          </div>
        </div>
        {this.props.item.specialPrice && <div className='product-label'>{`-${this.props.item.discount}%`}</div>}
        <div onClick={this.shareWithFacebook} className='product-facebook' style={icon}></div>
      </div>
    );
  }
}
