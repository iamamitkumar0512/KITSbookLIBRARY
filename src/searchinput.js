import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchtext extends Component {
  static propTypes = {
    updatesearch: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }
  updatesearch = (query) => {
    this.setState({ query: query });
    this.props.updatesearch(query);
  }

  render () {
    return (
      <div className="search-books-input-wrapper">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Search by title or author.."
            onChange={(event) => this.updatesearch(event.target.value)}
            value={this.state.query}
          />
        </form>
      </div>
    )
  }
}

export default Searchtext
