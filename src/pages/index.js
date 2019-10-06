import React from "react"
import styled, {createGlobalStyle} from "styled-components";

import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #333; 
    overflow-y: scroll;
    overflow-x: hidden;
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

const StyledContent = styled.div`
  margin: 0 220px;
  padding: 100px 260px 0 260px;
  text-align: center;
  @media (min-width: 992px) and (max-width: 1449px) {
    margin: 0 130px;
    padding: 60px 20px 0 20px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0 60px;
    padding: 60px 20px 0 20px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0 30px;
    padding: 60px 20px 0 20px;
  }
  @media (max-width: 575.98px) {
    margin: 0 20px;
    padding: 30px 20px 0 20px;
  }
`

class IndexPage extends React.Component {
  render () {
    if (typeof window !== 'undefined') {
    return (
      <GlobalContainer>
        <GlobalStyle/>
          <Header/>
        <StyledContent>
          <About/>
          <Services/>
          <Clients/>
          <Contact/>
        </StyledContent>
        <Footer/>
      </GlobalContainer>
    )
    } else {
      return null
    }
  }

}







export default IndexPage
