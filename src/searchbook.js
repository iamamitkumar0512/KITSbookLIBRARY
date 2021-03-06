import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Book from './book';
import Searchtext from './searchinput';



class Searchbook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updatesearch: PropTypes.func.isRequired
  }
  state = {
    searchTerms: [
      'Amit',
      'Android',
      'Art',
      'Artificial Intelligence',
      'Astronomy', 'Austen',
      'Baseball', 'Basketball',
      'Bhagat', 'Biography', 'Brief',
      'Business', 'Camus', 'Cervantes',
      'Christie', 'Classics', 'Comics', 'Cook',
      'Cricket', 'Cycling', 'Desai', 'Design',
      'Development', 'Digital Marketing',
      'Drama', 'Drawing', 'Dumas', 'Education',
      'Everything', 'Fantasy', 'Film', 'Finance',
      'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
      'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
      'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',
      'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
      'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ],
    status: 'selected'
  }

  render () {
    const { books, query, updatesearch, updateShelf, showDetails } = this.props;
    const { mode } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to={process.env.PUBLIC_URL + "/"}
          >Close</Link>
          <Searchtext
            updatesearch={updatesearch}
          />
        </div>
        <div className="search-books-results">
          {books.length !== 0 && query.lentgh !== 0 && (
            <div className="results">
            <p><mark>SEARCH RESULTS : </mark>{books.length} book found</p>
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    books={books}
                    updateShelf={updateShelf}
                    book={book}
                    showDetails={showDetails}
                    updatesearch={updatesearch}
                    mode={mode}
                  />
                  </li>
                ))
              }
            </ol>
          </div>
          )}

          {(books.length === 0 && query === 'empty query') && (
            <div className="no-results">
              <p className="message"><mark>Oops!! Sorry No Result Found.. </mark></p>
            </div>
          )}

          {!query && (
            <div className="empty-query">
              <p className="message"><mark>NOTE : </mark>
                 Sorry but our backend API uses a fixed set of cached search results and is limited to a particular set of search terms.
              </p>
              <ol className="searching-info">
                {this.state.searchTerms.map( keyword => (
                  <li key={keyword} className="keyword">{keyword}</li>
                ))}
              </ol>
            </div>
          )}

          {query ? books.length === 0 && query !== 'empty query' && (
            <div className="results">
            <p className="message animation"><mark className="loading">SEARCHING</mark></p>
            </div>
          ) : undefined}
        </div>
      </div>
    )
  }
}

export default Searchbook
