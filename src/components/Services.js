import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase, faNetworkWired, faProjectDiagram, faServer } from "@fortawesome/free-solid-svg-icons"
import bg2 from "../../static/bg2.jpg"

const StyledServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  flex-wrap: wrap;
  position: relative;
  color: #eeebeb;
  padding: 50px 0;
  .bg {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg2}) center;
    background-size: cover;
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 1;
    flex-basis: 400px;
    height: 240px;
    margin: 20px;
    padding: 40px;
    box-sizing: border-box;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 600ms ease;
    &::after {
        content: '';
        height: 300%;
        width: 300%;
        background: #0460ff;
        position: absolute;
        top: -400%;
        left: -400%;
        z-index: 0;
        transition: 600ms ease;
        transform: rotate(45deg);
    }
    &:hover, &:focus {
      &::after {
        top: -50%;
        left: -50%;
        transition: 600ms ease;
      }
      transition: 600ms ease;
      color: #fff;
      border-color: #0460ff;
    }
    > h4, p, svg {
      z-index: 10;
    }
  }
  h4 {
    margin: 20px 0 10px 0;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    flex-wrap: wrap;
    div {
      margin: 20px 0
    }
  }
`

class Services extends React.Component {
  render() {
    return (
      <StyledServices id="services">
        <div className="bg"></div>
        <div className="container">
          <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
          <h4>Sieci komputerowe</h4>
          <p>Projektowanie, wdrażanie i konfiguracja sieci komputerowych.</p>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faProjectDiagram} size="3x"/>
          <h4>Obsługa informatyczna</h4>
          <p>Usługi informatyczne na podstawie umowy skierowane do jednostek budżetowych, biur, sklepów, itp.</p>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faServer} size="3x"/>
          <h4>Administracja serwerów</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faDatabase} size="3x"/>
          <h4>Kopie zapasowe</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>
      </StyledServices>
    )
  }
}

export default Services
