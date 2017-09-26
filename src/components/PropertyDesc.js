import React, { Component } from 'react';
import './PropertyDesc.css';

class PropertyDesc extends Component {
  render() {
    return(
        <div className="box">
          <ul>
            <li>
              {this.props.propertyItem.id}
            </li>
            <li>
              {this.props.propertyItem.street}
            </li>
            <li>
              {this.props.propertyItem.city}
            </li>
            <li>
              {this.props.propertyItem.state}
            </li>
            <li>
              {this.props.propertyItem.zip}
            </li>
            <li>
              {this.props.propertyItem.rent}
            </li>
          </ul>
        </div>
      );
  }
}

export default PropertyDesc;