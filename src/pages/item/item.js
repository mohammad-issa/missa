import React, { Component } from 'react';
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
    })
  }

  render() {
    return (
      <div className='products-warpper'>
        <h1>{this.state.itemInfo.name}</h1>
        {this.state.itemInfo.specialPrice && <div>:D</div>}
        <p>{this.state.itemInfo.description}</p>
      </div>
    );
  }
}
