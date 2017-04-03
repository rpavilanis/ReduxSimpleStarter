import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // event => basically is ES6 for a function - instead of having an onInputChange
    // function, you just do that here.
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
