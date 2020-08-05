import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Searchpage extends Component {
  render () {
    return (
      <div className="open-search">
        <Link
          to={process.env.PUBLIC_URL + "/search"}
        >Add book</Link>
      </div>
    )
  }
}
export default Searchpage
