import React, { Component } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { itemsData } from '../../assets/itemsData';

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
        if (this.state.itemInfo.specialPrice) {
            window.ga('send', 'pageview', {
                'dimension1':  `${this.state.itemInfo.discount}% off`
            });
        }
    });
  }

  render() {
    return (
      <div className='item-warpper'>
        <ProductCard item={this.state.itemInfo}/>
      </div>

    );
  }
}
