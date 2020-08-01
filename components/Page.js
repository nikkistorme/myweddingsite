import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

export default class Page extends React.Component {
  render() {
    return (    
      <React.Fragment>
        <Meta />
        <Header />
        <div>{this.props.children}</div>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}