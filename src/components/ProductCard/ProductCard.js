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
    window['dataLayer'].push({
      event: 'itemEvents',
      'event label': `${this.props.item.name} added to cart`
    });
  }

  shareWithFacebook() {
    alert(`${this.props.item.name} has shared to facebook.`);
  }

  renderTags() {
    return this.props.item.tags.map((tag, index) => {
      return <li key={index}>{tag}</li>
    })
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
        {this.props.item.discount && <div className='product-label'>{`-${this.props.item.discount}%`}</div>}
        <div onClick={this.shareWithFacebook} className='product-facebook' style={icon}></div>
        {this.props.standalone &&
          <div className='tags-wapper'>
            <span className='tagle-title'>Tags:</span>
            <ul className='tags-list'>{this.renderTags()}</ul>
          </div>
        }
      </div>
    );
  }
}
