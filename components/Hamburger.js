import React from 'react';
import styled from 'styled-components';

import Nav from './Nav.js'

const SideNav = styled.div`
  width: 65vw;
  max-width: 280px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -65vw;
  background-color: #faf5ec;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  will-change: width;
  border-right: solid 2px #3E5656;
  margin-left: -3px;
  &.nav-open {
    left: 0;
    box-shadow: 5px 5px 100px rgba(0,0,0,.5);
  }
`

const Signature = styled.span`
  position: absolute;
  right: 5px;
  bottom: 15px;
  font-family: 'Braggadocio';
  font-size: 2rem;
  color: #d95c46;
`;

const HamburgerContainer = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 3;
  top: 0;
  @media (min-width: 680px) {
    display: none;
  }
`

const BackCircle = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  background-color: #3E5656;
  border-radius: 50%;
  z-index: 1;
  height: 50px;
  width: 50px;
`

const Container = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 2;
  top: 7px;
  left: 8px;
  &.change div:first-child {
    -webkit-transform: rotate(-45deg) translate(-6px, 3px) ;
    transform: rotate(-45deg) translate(-6px, 3px) ;
  }
  &.change div:nth-child(2) {
    opacity: 0;
  }
  &.change div:last-child {
    -webkit-transform: rotate(45deg) translate(-5px, -3px) ;
    transform: rotate(45deg) translate(-5px, -3px) ;
  }
`

const Bar = styled.div`
  width: 20px;
  height: 3px;
  background-color: #faf5ec;
  margin: 3px 0;
  transition: 0.4s;
`

export default class Hamburger extends React.Component {

  isCurrentPage = (pathname, link_name) => pathname === link_name ? true : false

  render() {
    return (
      <React.Fragment>
        <SideNav id="side-nav" className={this.props.sideNavOpen ? `nav-open` : null}>
          <Nav />
          <Signature>n&a</Signature>
        </SideNav>
        <HamburgerContainer onClick={() => {
          console.log(this.props.sideNavOpen)
          this.props.toggleSideNav();
        }}>
          <BackCircle />
          <Container id="hamburger-changer" className={this.props.sideNavOpen ? `change` : null}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
          </Container>
        </HamburgerContainer>
      </React.Fragment>
    )
  }
}
