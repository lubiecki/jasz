import React from "react"
import styled from "styled-components";

const StyledFooter = styled.div`
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  font-weight: 400;
  span {
    color: #787878;
  }
  a {
    color: inherit;
  }
`

class About extends React.Component {
  render() {
    return (
      <StyledFooter>
        <span>Wszelkie prawa zastrzeżone © 2019 JASZ | Projekt i wdrożenie <a href="mailto:kontakt@lubiecki.pl">lubiecki.pl</a></span>
      </StyledFooter>
    )
  }
}

export default About
