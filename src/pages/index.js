import React from "react"
import styled, {createGlobalStyle} from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faProjectDiagram, faServer, faEthernet } from '@fortawesome/free-solid-svg-icons'
import bg from "../../static/bg.jpg";
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import GoogleMapReact from 'google-map-react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #333;
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
  margin: 80px 80px;
  div {
    margin-top: 20px;
    width: 100%;
  }
  h2 {
    width: 100%;
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
`

class IndexPage extends React.Component {
  static defaultProps = {
    center: {
      lat: 51.66361,
      lng: 16.0845
    },
    zoom: 11
  };
  componentDidMount() {
    if (typeof window !== undefined) {
      new Flickity( '.gallery', {
        cellSelector: 'div',
        prevNextButtons: false,
        adaptiveHeight: true,
        setGallerySize: true
      });
    }
  }
  render () {
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
            <div className="gallery">
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
            </div>
          </StyledClients>
          <StyledContact>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDdYrvzSt_ErHqUjV_gQGss7E0Tg5q3JDw'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            ></GoogleMapReact>
          </StyledContact>
        </StyledContent>

      </GlobalContainer>
    )
  }

}







export default IndexPage
