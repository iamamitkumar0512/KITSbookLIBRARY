import React, {Component} from 'react'
import Booklogo from './icons/logo.svg'


class Book extends Component {
  state = {
    mode: this.props.status,
    pending: false
  }

  showDetails = (book) => {
    this.props.showDetails(book);
    console.log(`clicked ${book.title}`);
  };

  updateShelf = (book, shelf) => {
    this.setState({ pending: true })
    this.props.updateShelf(book, shelf);
  };


 

  render () {

    const { book, showDetails} = this.props;

    let selected = book.shelf ? 'picked' : 'none'

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : Booklogo})`
              }}>
          </div>

          {selected === 'picked' && this.state.mode === 'selected' && (
            <div className="book-selected">
              <p className="message"><mark>Selected</mark></p>
            </div>
          )}

        </div>
        <div className="book-bottom">
            <div className="book-title">{book.title}</div>
            <div className="book-shelve-changer">
              <select
                onChange={(event) => this.updateShelf(book, event.target.value)}
                defaultValue={book.shelf || 'none'}
              >
                <option value="move" disabled>Move to section</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Completed</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="book-authors">
            {book.authors ? book.authors.join(', ') : ''}
          </div>
          <button
            onClick={ (event) => showDetails(book)}
            className="button show-details"
          >Details
          </button>

          {this.state.pending && this.state.mode === 'update' && (
            <div className="book-update">
              <p className="message animation"><mark className="loading">Wait Upadting..</mark></p>

            </div>
          )}
      </div>

    )
  }
}

export default Book
