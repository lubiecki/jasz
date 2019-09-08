import React from "react"
import styled, {createGlobalStyle} from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faProjectDiagram, faServer, faEthernet } from '@fortawesome/free-solid-svg-icons'
import bg from "../../static/bg.jpg";
import Carousel from 'nuka-carousel';
import { Map, TileLayer, Circle } from 'react-leaflet'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #333;
  }
`;

const GlobalContainer = styled.div`
  @import url('//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  * {
    outline: none;
  }
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
  margin: 0 220px;
  padding: 100px 260px;
  text-align: center;
`

const StyledAbout = styled.div`
  h1 {
    font-size: 38px;
    font-weight: 800;
  }
  p {
    color: #666;
    font-size: 16px;
    line-height: 31px;
  }
`

const StyledServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h4 {
    margin: 20px 0 0 0;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`

const StyledClients = styled.div`
  margin: 80px 0;
  h2 {
    font-weight: 800;
    text-align: left;
    box-sizing: border-box
  }
  p {
    font-size: 16px;
  }
  span {
    font-size: 18px;
    width: 100%;
    text-align: right;
    display: block;
  }
`

const StyledContact = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .container {
    padding: 20px;
    width: 50%;
    height: 500px;
  }
  .leaflet-container {
    border-radius: 4%;
    overflow: hidden;
    height: 100%;
  }
  .leaflet-tile {
    filter: brightness(1);
  }
  form {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .form-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
    }
    label {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      margin-right: 5px;
      margin-bottom: 20px;
      &:nth-of-type(2) {
        margin-right: 0;
      }
      input, textarea {
        border: 2px solid #242424;
        border-radius: 22px;
        padding: 10px 14px;
        box-sizing: border-box;
        margin-left: -16px;
        margin-top: 10px;
        width: 100%;
      }
      textarea {
        resize: none;
        height: 200px;
      }
    }
    button {
      margin-top: 20px;
      display: inline-block;
      background: #0460FF;
      color: #fff;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 15px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      border: 2px solid transparent;
      box-sizing: border-box;
      transition: 200ms ease;
      margin-left: -15px;
      &:active, &:focus, &:hover {
        background: #FFF;
        color: #333;
        border: 2px solid #242424;
        box-sizing: border-box;
        transition: 200ms ease;
      }
    }
  }
`

class IndexPage extends React.Component {
  render () {
  const position = [51.66, 16.08]
    if (typeof window !== 'undefined') {
    return (
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
          <StyledAbout>
            <h1>Tempus imperdiet nulla malesuada pellentesque elit eget.</h1>
            <p>Etiam erat velit scelerisque in. Volutpat est velit egestas dui id ornare arcu odio ut. Non nisi est sit amet facilisis magna etiam tempor orci. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Vitae tortor condimentum lacinia quis vel eros donec. Id aliquet risus feugiat in ante. Volutpat maecenas volutpat blandit aliquam etiam erat.</p>
          </StyledAbout>
          <StyledServices>
            <div className="container">
              <FontAwesomeIcon icon={faNetworkWired} size="3x"  color="#333"/>
              <h4>Nibh cras pulvinar</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
            <div className="container">
              <FontAwesomeIcon icon={faProjectDiagram} size="3x" color="#333"/>
              <h4>Nibh cras pulvinar</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
            <div className="container">
              <FontAwesomeIcon icon={faServer} size="3x" color="#333"/>
              <h4>Nibh cras pulvinar</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
            <div className="container">
              <FontAwesomeIcon icon={faEthernet} size="3x" color="#333"/>
              <h4>Nibh cras pulvinar</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
          </StyledServices>
          <StyledClients>
            <h2>Nasi klienci</h2>
            <Carousel withoutControls={true} autoplay={true}>
              <div>
                <p>"Nunc faucibus a pellentesque sit. Dignissim enim sit amet venenatis urna cursus eget nunc. A pellentesque sit amet porttitor eget dolor morbi non. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Sed enim ut sem viverra aliquet."
                <span>~ John Doe</span>
                </p>
              </div>
              <div>
                <p>"Nunc faucibus a pellentesque sit. Dignissim enim sit amet venenatis urna cursus eget nunc. A pellentesque sit amet porttitor eget dolor morbi non. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Sed enim ut sem viverra aliquet."
                <span>~ John Doe</span>
                </p>
              </div>
              <div>
                <p>"Nunc faucibus a pellentesque sit. Dignissim enim sit amet venenatis urna cursus eget nunc. A pellentesque sit amet porttitor eget dolor morbi non. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Sed enim ut sem viverra aliquet."
                <span>~ John Doe</span>
                </p>
              </div>
            </Carousel>
          </StyledClients>
          <StyledContact>
              <div className="container">
                    <Map center={position} zoom={11}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={position} radius={7000} fillColor="blue"/>
                    </Map>
              </div>
              <div className="container">
                <form method="post" action="#">
                  <div className="form-container">
                    <label>
                      Imię
                      <input type="text" name="name" id="name" />
                    </label>
                    <label>
                      Adres email
                      <input type="email" name="email" id="email" />
                    </label>
                  </div>
                  <label>
                    Temat
                    <input type="text" name="subject" id="subject" />
                  </label>
                  <label>
                    Wiadomość
                    <textarea name="message" id="message" rows="5" />
                  </label>
                  <button type="submit">Wyślij wiadomość</button>
                </form>
              </div>
          </StyledContact>
        </StyledContent>

      </GlobalContainer>
    )
    } else {
      return null
    }
  }

}







export default IndexPage
