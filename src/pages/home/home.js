import React, { Component } from 'react';
import './home.css';

import maintenanceImage from '../../assets/images/maintenance_page_2.png';

export class Home extends Component {
  render() {
    const banner = {
      backgroundImage: `url(${maintenanceImage})`,
    }

    return (
      <div className='home-container'>
        <div className='home-banner'>
          <div className='banner-image' style={banner}></div>
          <p className='banner-text'>sorry! we are under construction</p>
        </div>
      </div>
    );
  }
}
