import React, { Component } from 'react';
import ImgSrc from 'assets/img/user-active.png';
import 'assets/styles/n.less';

class Td extends Component {
  render() {
    return (
      <section>
        <div className="top">this is td.</div>
        <img src={ImgSrc} alt="" />
      </section>
    );
  }
}

export default Td;
