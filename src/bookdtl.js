import React, { Component } from 'react';

import Closebtn from './close';
import Booklogo from './icons/logo.svg';




class BookDtl extends Component {
  render () {
    const { book, closeDtls } = this.props;
    return (
      <div className="bookdtl-popup-screen">
        <Closebtn
          onClick={(event) => closeDtls()}
        />
        <div className="bookdtl-container">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : Booklogo})`
              }}>
          </div>
          <div className="book-dtl">
            <h3>{book.title}</h3>
            {book.subtitle ? (book.subtitle.length !==0 && (
              <h5>{book.subtitle}</h5>
            )) : undefined}

            {book.averageRating ? (book.averageRating.length !==0 && (
              <div className="ratng">{`rating: ${book.averageRating}`}</div>
            )) : (
              <div className="ratng">Not Rated</div>
            )}

            {book.authors ? (book.authors.length !==0 && (
              <div className="dtled-info authors">
              <span className="label">AUTHOR / AUTHORS:</span>
              <span>{book.authors.join(', ')}</span>
              </div>
            )) : undefined}

            {book.publisher ? (book.publisher.length !==0 && (
              <div className="dtlled-info published">
              <span className="label">PUBLISHER:</span>
              <span>{book.publisher}</span>
              </div>
            )) : undefined}

            {book.publishedDate ? (book.publishedDate.length !==0 && (
              <div className="dtled-info published">
              <span className="label">PUBLISHED:</span>
              <span>{book.publishedDate}</span>
              </div>
            )) : undefined}

            {book.pageCount ? (book.pageCount.length !==0 && (
              <div className="dtled-info pages">
              <span className="label">PAGE-COUNT:</span>
              <span>{book.pageCount}</span>
              </div>
            )) : undefined}

            {book.language ? (book.language.length !==0 && (
              <div className="dtled-info language">
              <span className="label">LANGUAGE:</span>
              <span>{book.language.toUpperCase()}</span>
              </div>
            )) : undefined}



            {/* <p>{book.description}</p> */}

            {book.categories ? (book.categories.length !==0 && (
            <ol className="category-tags">
              {book.categories.map( keyword => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ol>)
            ) : undefined}

            <div className="bookdtl-buttons">
              {book.canonicalVolumeLink ? book.canonicalVolumeLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.canonicalVolumeLink}>Buy</a>
              ) : undefined}
              {book.infoLink ? book.infoLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.infoLink}>More...</a>
              ) : undefined}
              {book.previewLink ? book.previewLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.previewLink}>Preview</a>
              ) : undefined}
            </div>



          </div>
        </div>

      </div>
    )
  }
}

export default BookDtl
