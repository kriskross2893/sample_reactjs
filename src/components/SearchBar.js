import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }


  
  render() {
    return (
    	<div className="searchbar">
	      <form>
	        <input
	          type="text"
	          placeholder="Search..."
	          value={this.props.filterText}
	          onChange={this.handleFilterTextInputChange}
	        />
	      </form>
      	</div>
    );
  }
}

export default SearchBar;