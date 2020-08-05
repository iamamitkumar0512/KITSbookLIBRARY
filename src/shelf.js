import React, { Component } from 'react'
import Book from './book'

class Shelve extends Component {
  state = {
      mode: 'update'
  }


  render () {
    const { name, books, shelf, updateShelf, showDetails } = this.props
    const { mode } = this.state
    return (
      <div>
        <div className="bookshelve">
          <h3 className="bookshelve-title">{name}</h3>
          <div className="bookshelve-books">
            <ol className="books-grid">
              {books.filter(book => book.shelf === shelf).map((book) => (
                <li key={book.id}>
                  <Book
                    books={books}
                    updateShelf={updateShelf}
                    book={book}
                    mode = {mode}
                    showDetails={showDetails}
                    
                  />
                </li>
                ))
              }
            </ol>
            {(books.length === 0) && (
              <div className="shelve-status">
                <p className="msg animation"><mark className="loading">Processing..</mark></p>
              </div>
            )}

            
            {(books.length !== 0) && (books.filter(book => book.shelf === shelf).length === 0) && (
              <div className="shelve-status">
                <p className="msg"><mark>Oops! NO Book Selected </mark></p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Shelve
