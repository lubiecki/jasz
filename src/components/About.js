import React from "react"
import styled from "styled-components";

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

class About extends React.Component {
  render() {
    return (
      <StyledAbout>
        <h1>Tempus imperdiet nulla malesuada pellentesque elit eget.</h1>
        <p>Etiam erat velit scelerisque in. Volutpat est velit egestas dui id ornare arcu odio ut. Non nisi est sit amet facilisis magna etiam tempor orci. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Vitae tortor condimentum lacinia quis vel eros donec. Id aliquet risus feugiat in ante. Volutpat maecenas volutpat blandit aliquam etiam erat.</p>
      </StyledAbout>
    )
  }
}

export default About
