import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import Hamburger from './Hamburger';
import { MainSection } from './styles/Main.js';

const HeightContainer = styled.div`
  min-height: 92vh;
`;

export default class Page extends React.Component {
  state = {
    sideNavOpen: false
  }

  toggleSideNavHamburger = () => {
    const changedNav = !this.state.sideNavOpen
    this.setState({sideNavOpen: changedNav});
  }

  toggleSideNavPage = () => {
    if (this.state.sideNavOpen) {
      const changedNav = false;
      this.setState({sideNavOpen: changedNav});
    }
  }
  
  render() {
    return (    
      <React.Fragment>
        <Meta />
        <Hamburger sideNavOpen={this.state.sideNavOpen} toggleSideNav={this.toggleSideNavHamburger} />
        <HeightContainer>
          <Header toggleSideNav={this.toggleSideNavPage} />
          <MainSection id="main" role="main" onClick={() => this.toggleSideNavPage()}>{this.props.children}</MainSection>
        </HeightContainer>
        <Footer />
      </React.Fragment>
    )
  }
}