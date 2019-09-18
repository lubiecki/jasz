import React from "react"
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
  @media (max-width: 575.98px) {
    display: none;
  }
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
`

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <StyledLogo>
          <span className="text-container">JS</span>
        </StyledLogo>
        <span className="mobile-menu">
          <FontAwesomeIcon icon={faBars} size="1x" color="#FFF"/>
        </span>
        <ul>
          <li><a href="#header">O nas</a></li>
          <li><a href="#header">Usługi</a></li>
          <li><a href="#header">Klienci</a></li>
          <li><a href="#header">Kontakt</a></li>
        </ul>
      </StyledNav>
    )
  }
}

export default Nav
