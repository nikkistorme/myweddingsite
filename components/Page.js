import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import Hamburger from './Hamburger';

export default class Page extends React.Component {
  render() {
    return (    
      <React.Fragment>
        <Meta />
        <Hamburger />
        <Header />
        <div id="main">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    )
  }
}