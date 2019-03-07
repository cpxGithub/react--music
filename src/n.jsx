import React, { Component } from 'react';
import ImgSrc from 'assets/img/user-active.png';
import 'assets/styles/n.less';

class Td extends Component {
  render() {
    return (
      <main>
        <div className="top">this is td.</div>
        <img src={ImgSrc} alt="" />
      </main>
    );
  }
}

export default Td;
