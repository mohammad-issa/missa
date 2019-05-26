import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { itemsData } from '../../assets/itemsData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
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
    });
  }

  componentDidMount() {
    window.dataLayer.push({
      event: 'itemView',
      specialPrice: this.state.itemInfo.discount ? 'true' : 'false',
      tags: this.state.itemInfo.tags.join(),
    });
  }

  render() {
    return (
      <div className='item-warpper'>
      <Helmet>
        <title>{this.state.itemInfo.name}</title>
      </Helmet>
        <Link to={`/products/`}><span className='back-icon'>Back</span></Link>
        <ProductCard item={this.state.itemInfo} standalone={true}/>
      </div>

    );
  }
}
