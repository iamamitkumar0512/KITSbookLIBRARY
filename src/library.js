import React, { Component } from 'react';

import Shelve from './shelf';



class ShelveLibrary extends Component {
render () {
    const { books, updateShelf, showDetails } = this.props;
    return (
      <div className="bookshelve-container">
        <Shelve
          name="Currently Reading"
          books={books}
          updateShelf={updateShelf}
          showDetails={showDetails}
          shelf = "currentlyReading"
        />
        <Shelve
          name="Completed"
          books={books}
          updateShelf={updateShelf}
          showDetails={showDetails}
          shelf = 'read'
        />
        <Shelve
          name="Want to Read"
          books={books}
          updateShelf={updateShelf}
          showDetails={showDetails}

          shelf = 'wantToRead'
        />

      </div>
    )
  }
}

export default ShelveLibrary
