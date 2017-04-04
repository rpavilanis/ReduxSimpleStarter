import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// whatever object is returned here is available as props in BookList
// (this function is glue between react and redux)
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all
  // of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes function and component and creates a container
// container automatically rerenders whenever state changes
// Promote BookList from a component to a container - it needs to know
// about new dispatch method, selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
