import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleFilterSelectInputChange = this.handleFilterSelectInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleFilterSelectInputChange(e) {
  	console.log(e.target.value)
  	this.props.onFilterSelectInput(e.target.value);
  }


  
  render() {
    return (
    	<div className="searchbar">
	      <form>
	        <input
	          className="my-searchbar"
	          type="text"
	          placeholder="Search..."
	          value={this.props.filterText}
	          onChange={this.handleFilterTextInputChange}
	        />
	        <select className="my-searchbar" value={this.props.filterCriteria} onChange={this.handleFilterSelectInputChange}>
	        	<option value="id">ID</option>
	        	<option value="street">STREET</option>
	        	<option value="city">CITY</option>
	        	<option value="state">STATE</option>
	        	<option value="zip">ZIP</option>
	        </select>
	      </form>
      	</div>
    );
  }
}

export default SearchBar;