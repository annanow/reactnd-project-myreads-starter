import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Searchpage extends Component {
  state = {
    query: "",
    queriedBooks: []
  };

  queryBooks = query => {
    const queriedBooks = [];

    if (query) {
      let queryResults = [];
      BooksAPI.search(query).then (results => {
        if (results && results.length) {
          queryResults = results.map(result => {
            result.shelf = this.addShelf(result);
            return result;
          });
          this.setState({queriedBooks: queryResults});
          }
          else {
            this.setState({queriedBooks: []
            });
          }
      });
    }
    else {
      this.setState({queriedBooks: []
      });
    }
    this.setState({query: query.trim()
    });
  };

  addShelf(result) {
    const hasShelf = this.props.books.filter(book => book.id === result.id);
    return.hasShelf.length ? hasShelf[0].shelf : 'none';
    }
    
}
