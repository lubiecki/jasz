import React from "react"
import styled from "styled-components";
import bg from "../../static/bg.jpg"

import Nav from "./Nav"

const StyledHeader = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.51), rgba(0,0,0,0.51)), url(${bg}) center;
  background-size: cover;
  color: #fff;
  box-sizing: border-box;
  padding: 40px 320px 0 320px;

  @media (min-width: 992px) and (max-width: 1449px) {
    padding: 20px 140px 0 140px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 20px 60px 0 60px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 20px 50px 0 50px;
  }
  @media (max-width: 575.98px) {
    padding: 20px 20px 0 20px;
  }
`;

const StyledHeading = styled.div`
  height: calc(100vh - (94px * 2));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 120px;
  line-height: 44px;
  .main {
    font-weight: 800;
    font-size: 60px;
    margin-bottom: 20px;
    line-height: 55px;
  }
  .sub {
    font-weight: 300;
    font-size: 25px;
  }
  .btn {
    margin-top: 20px;
    display: inline-block;
    background: #FFF;
    border: none;
    padding: 0 16px;
    font-weight: 500;
    font-size: 15px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      background: #0460FF;
      z-index: 0;
      transition: 200ms ease;
    }
    .text-container {
      z-index: 11;
      position: relative;
      color: #222;
      transition: 200ms ease;
    }
    &:hover {
      &::after {
        width: 100%;
        transition: 200ms ease;
      }
      .text-container {
        color: #FFF;
        transition: 200ms ease;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1449px) {
    padding: 0 80px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 0 40px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 0 30px;
  }
  @media (max-width: 575.98px) {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .main {
      font-size: 40px;
      line-height: 44px;
    }
    .sub {
      font-size: 20px;
      line-height: 26px;
    }
  }
`

class Header extends React.Component {
  render () {
    return (
    <StyledHeader>
      <header>
        <Nav/>
        <StyledHeading>
          <div className="main">Lorem ipsum dolor sit amet.</div>
          <div className="sub">Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Eget felis eget nunc
            lobortis mattis aliquam faucibus. Semper auctor neque vitae tempus quam. Et pharetra
            pharetra massa massa ultricies mi quis hendrerit dolor.
          </div>
          <div className="btn">
            <span className="text-container">Dowiedz się więcej</span>
          </div>
        </StyledHeading>
      </header>
    </StyledHeader>
    )
  }
}

export default Header
