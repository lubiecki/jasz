import React from "react"
import styled from "styled-components";
import Carousel from "nuka-carousel"

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


class Clients extends React.Component {
  render() {
    return (
      <StyledClients id="clients">
        <h2>Zaufali już</h2>
        <Carousel withoutControls={true} autoplay={true}>
          <div>
            <p>Wzorowa współpraca w pełnym zakresie obsługi szkoły. Doradztwo i administracja na wysokim poziomie i zawsze zgodnie z oczekiwaniami.
              <span>~ Szkoła Podstawowa nr 2 Głogów</span>
            </p>
          </div>
        </Carousel>
      </StyledClients>
    )
  }
}

export default Clients
