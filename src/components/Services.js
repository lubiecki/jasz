import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEthernet, faNetworkWired, faProjectDiagram, faServer } from "@fortawesome/free-solid-svg-icons"

const StyledServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 250px;
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
    )
  }
}

export default Services
