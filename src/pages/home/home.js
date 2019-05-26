import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import './home.css';

import maintenanceImage from '../../assets/images/maintenance_page_2.png';

export class Home extends Component {
  render() {
    const banner = {
      backgroundImage: `url(${maintenanceImage})`,
    }

    return (
      <div className='home-container'>
        <Helmet>
          <title>Tracking Demo</title>
        </Helmet>
        <div className='home-banner'>
          <div className='banner-image' style={banner}></div>
          <p className='banner-text'>sorry! we are under construction</p>
        </div>
        <Link to={'/products/'}><span>Products Page</span></Link>
      </div>
    );
  }
}
