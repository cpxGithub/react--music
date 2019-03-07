import React, { Component } from 'react';
import ImgSrc from 'assets/img/user-active.png';

class Td extends Component {
  render() {
    return (
      <main>
        <div>this is td</div>
        <img src={ImgSrc} alt="" />
      </main>
    );
  }
}

export default Td;
