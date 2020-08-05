import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Head from './header';
import Searchpage from './searchpage';
import Searchbook from './searchbook';
import BookDtl from './bookdtl';
import ShelveLibrary from './library';
import Foot from './foot';
import * as BooksAPI from './BooksAPI';
import './App.css';



class App extends Component {
  state = {
    stack: [],
    bookDetails: [],
    searchQuery: [],
    searchresult: [],
    searchText: ''  
  };

  updateStack = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ stack: books });
      })
      .catch(error => console.log(error));

  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      console.log(`Moved "${book.title}" to "${shelf}" ID shelf`);
      this.updateStack();
    }).catch(error => console.log(error));
  };

  syncShelf = (books) => {
    books.map(book => (this.state.stack.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
  }

  searchoutput = (query) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchQuery: [], searchText: books.error });
        } else {
          this.syncShelf(books);
          this.setState({ searchQuery: books })
        }
      }).catch(error => console.log(error));
      this.setState({ searchText: query });
    } else {
       this.setState({ searchQuery: [] });
       this.setState({ searchText: '' });
    }
  };

  componentDidMount() {
    this.updateStack();
  };

  showDetails= (book) => {
    this.setState({ bookDetails: book });
  };

  closeDtls = () => {
    this.setState({ bookDetails: [] });
  };

  render() {
    const { stack ,searchQuery, searchText, bookDetails } = this.state
    return (
      <div className="app">
        <Head />

        {bookDetails.length !== 0 && (
          <BookDtl
            book={bookDetails}
            closeDtls={this.closeDtls}
          />
        )}

        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => (
          <main className="list-books">
            <ShelveLibrary
              books={stack}
              updateShelf={this.updateShelf}
              showDetails={this.showDetails}
            />
            <Searchpage />
          </main>
        )}/>

        <Route path={process.env.PUBLIC_URL + "/search"} render={() => (
          <main>
          <Searchbook
            books={searchQuery}
            selectedBooks={stack}
            query={searchText}
            updatesearch={this.searchoutput}
            updateShelf={this.updateShelf}
            showDetails={this.showDetails}
          />
        </main>
        )}/>

        <Foot />
      </div>
    )
  }
}

export default App
