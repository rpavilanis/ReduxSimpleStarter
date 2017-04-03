import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCL-ka3NJwNL-sDJO3O6RY5qsioNXG3H8c';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

// Create new component that will create some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Take this component's generated HTML and put on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
