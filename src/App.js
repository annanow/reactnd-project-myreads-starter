import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Searchpage from './Searchpage.js'
import ListBooks from './ListBooks.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * Using the URL in the browser's address bar will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    results: [],
    showSearchPage: true
  }

  getAllBooks=()=>{
    this.setState({
      loading:true
    })
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books,
        loading: false
      })
    })
  }
  componentDidMount(){
    this.getAllBooks()
  }

  switchShelf = (e, matchingBook) => {
    let books = this.state.books;
    let shelf = e.target.value;
    matchingBook.shelf = e.target.value;
    this.setState({
      books
    });

    BooksAPI.update(matchingBook, shelf).then(() => {
      this.setState(state => {
        books: state.books
        .filter(b => b.id !=matchingBook.id)
        .concat([matchingBook])
      }));
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Searchpage
              books={this.state.books}
              switchShelf={this.switchShelf}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <Listbooks
              books={this.state.books}
              switchShelf={this.switchShelf}
            />
          )}
        />
      </div>

export default BooksApp
