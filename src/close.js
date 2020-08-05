import React, { Component } from 'react';
import pic from './icons/close.svg';

class Closebtn extends Component {
  render () {
    const { onClick } = this.props;
    return (
      <button
        className="close"
        onClick={onClick}
        style={{
          backgroundImage: `url(${pic})`,
          width: 35,
          height: 35
        }}></button>
    )
  }
}

export default Closebtn
