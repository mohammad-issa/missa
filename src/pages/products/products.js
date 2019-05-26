import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { ProductCard } from '../../components/ProductCard/ProductCard';
import { itemsData } from '../../assets/itemsData';

import './products.css';

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: itemsData
    }

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    return this.state.products.map((item) => {
      return <ProductCard key={item.id} item={item}/>
    })
  }

  render() {
    return (
      <div className='products-warpper'>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <div className='products-header'>
          <h1 className='products-headline'>Products</h1>
          <span><img alt='search' className='search-icon' src='http://simpleicon.com/wp-content/uploads/active-search.png' /></span>
        </div>
        <hr/>
        <div className='products-list'>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
