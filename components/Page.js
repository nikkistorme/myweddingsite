import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import Hamburger from './Hamburger';
import { MainSection } from './styles/Main.js';


export default class Page extends React.Component {
  render() {
    return (    
      <React.Fragment>
        <Meta />
        <Hamburger />
        <Header />
        <MainSection id="main" role="main">{this.props.children}</MainSection>
        <Footer />
      </React.Fragment>
    )
  }
}