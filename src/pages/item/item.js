import React, { Component } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { itemsData } from '../../assets/itemsData';
import { Link } from "react-router-dom";

import './item.css';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: parseInt(this.props.match.params.id, 10),
      itemInfo: {},
    }
  }

  componentWillMount() {
    const itemInfo = itemsData.find(item => item.id === this.state.itemId);
    this.setState({
      itemInfo: itemInfo,
    }, () => {
      window['dataLayer'].push({
        event: 'analyticsPV',
        specialPrice: this.state.itemInfo.discount ? `${this.state.itemInfo.discount}%` : 'none',
        tags: this.state.itemInfo.tags ? this.state.itemInfo.tags.join() : 'none',
      });
    });
  }

  render() {
    return (
      <div className='item-warpper'>
        <Link to={`/products/`}><span className='back-icon'>Back</span></Link>
        <ProductCard item={this.state.itemInfo} standalone={true}/>
      </div>

    );
  }
}
