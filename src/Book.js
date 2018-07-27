import React, {Component} from 'react';

class Book extends Component {
  render() {
    const { matchingBooks } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {matchingBooks.length > 0 &&
            matchingBooks.map(matchingBook =>
            <li key={matchingBook.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: 'url("${matchingBook.imageLinks.thumbnail}")'
                  }}>
                <div className="book-shelf-changer">
                  <select onChange={e => this.props.switchShelf(e, matchingBook)} value={matchingBook.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{matchingBook.title}
              </div>
              <div className="book-authors">{matchingBook.authors}
              </div>
            </div>
          </li>
        
        ))}
      </ol>
    </div>
   );
 }
}

export default Book;
