import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropertyList from './components/PropertyList';
import SearchBar from './components/SearchBar';

/*const PROPERTIES = [
  {"id":"5592d311d7c6770300911b65","street":"505 South Market St","city":"San Jose","state":"CA","zip":"95008","rent":3500},
  {"id":"5592d311d7c6770300911b64","street":"404 South Market St","city":"San Maria","state":"CA","zip":"95008","rent":3200},
  {"id":"5592d311d7c6770300911b63","street":"303 South Market St","city":"San Dosena","state":"CA","zip":"95008","rent":3100},
  {"id":"5592d311d7c6770300911b62","street":"202 South Market St","city":"San Delabra","state":"CA","zip":"95008","rent":3000},
]*/

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      properties: [],
      filterText: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }


  handleFilterTextInput(filterText) {
    this.fireSearch(filterText);
  }



  fireSearch(filterText){
    console.log("value", filterText);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://localhost:4000/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function () {
      console.log('data returned:', xhr.response);
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          
          this.setState({
            filterText: filterText,
            properties: xhr.response.data.getProperties
          });
        }
      }
    }.bind(this);
    var query = `query GetProperties($search: String) {
      getProperties(search:$search){id,street,city,state,zip,rent}
    }`;
    xhr.send(JSON.stringify({
      query: query,
      variables: { search: filterText },
  }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
            propertyList={this.state.properties}
          />
          <PropertyList propertyList={this.state.properties} />
      </div>
    );
  }
}

export default App;
