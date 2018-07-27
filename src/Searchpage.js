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
          
        }
      })
    }

  }
}
