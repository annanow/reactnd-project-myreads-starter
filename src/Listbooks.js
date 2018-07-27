import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class Listbooks extends Component {
  state = {};

  render () {
    const { books } = this.props;
    const currentlyReading = books.filter(
      book => book.shelf === 'currentlyReading'
    );
    const read = books.filter(book => book.shelf === 'read');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');


  }
}
