import React from "react"
import styled, {createGlobalStyle} from "styled-components";

import bg from "../../static/bg.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
`

const StyledHeader = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.51), rgba(0,0,0,0.51)), url(${bg}) center;
  background-size: cover;
  color: #fff;
  box-sizing: border-box;
  padding: 40px 320px 0 320px;
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
`;

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
`

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
`

const StyledContent = styled.div`
  margin: 0 320px;
`

const IndexPage = () => (
  <GlobalContainer>
    <GlobalStyle/>
  <StyledHeader>
    <header>
      <StyledNav>
        <StyledLogo>
          <span className="text-container">JS</span>
        </StyledLogo>
        <ul>
          <li><a href="#header">O nas</a></li>
          <li><a href="#header">Usługi</a></li>
          <li><a href="#header">Klienci</a></li>
          <li><a href="#header">Kontakt</a></li>
        </ul>
      </StyledNav>
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
  <StyledContent>
    test
  </StyledContent>
  </GlobalContainer>
)







export default IndexPage
