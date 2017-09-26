import React, {Component} from 'react';
import PropertyDesc from './PropertyDesc';

class PropertyList extends Component {
  render() {
    var rows = [];
    this.props.propertyList.forEach((property) =>{
      rows.push(<PropertyDesc propertyItem={property} key={property.id}/>);
    })
    return(
      <div>
        {rows}
      </div>
    );
  }
}

export default PropertyList;