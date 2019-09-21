import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -0.1em;
  position: relative;
  padding: 10px 16px 10px 10px;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: '';
    height: 150%;
    width: 150%;
    background: #0460ff;
    position: absolute;
    top: -130%;
    left: -130%;
    z-index: 0;
    transition: 200ms ease;
    transform: rotate(45deg);
  }
  &:hover {
    &::after {
      top: -25%;
      left: -25%;
      transition: 200ms ease;
      }
  }
  .text-container {
    z-index: 10;
  }
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .mobile-menu {
    display: none;
  }
  ul {
  width: 35%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 14px;
  font-weight: 500;
  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    padding-bottom: 8px;
    &::after {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      background: #FFF;
      bottom: 0;
      left: -20%;
      transition: 200ms ease;
    }
    &:hover, &:focus {
      &:after {
        width: 140%;
        transition: 200ms ease;
        }
      }
  }
}
  @media (max-width: 575.98px) {
    .mobile-menu {
      display: block;
      z-index: 101;
      position: fixed;
      right: 20px;
    }
    ul {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #222;
      top: ${props => props.isOpen};
      left: 0;
      z-index: 100;
      flex-direction: column;
      padding: 200px 140px;
      box-sizing: border-box;
      font-size: 30px;
      transition: 200ms ease;
    }
  }
`

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
    this.changeMenuState = this.changeMenuState.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  changeMenuState() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }
  handleLinkClick() {
    this.setState(state => ({
      isOpen: false
    }));
  }
  render() {
    return (
      <StyledNav isOpen={this.state.isOpen ? "0" : "-100vh"}>
        <StyledLogo>
          <span className="text-container">JS</span>
        </StyledLogo>
        <span className="mobile-menu" onClick={this.changeMenuState}>
          <FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} size="2x" color={window.scrollTop > "100vw" ? "#333" : "#FFF"}/>
          {console.log(window.scrollTop)}
        </span>
        <ul>
          <li><Link to="/#about" onClick={this.handleLinkClick}>O nas</Link></li>
          <li><Link to="/#services" onClick={this.handleLinkClick}>Usługi</Link></li>
          <li><Link to="/#clients" onClick={this.handleLinkClick}>Klienci</Link></li>
          <li><Link to="/#contact" onClick={this.handleLinkClick}>Kontakt</Link></li>
        </ul>
      </StyledNav>
    )
  }
}

export default Nav
