import React from "react"
import styled from "styled-components";
import { Circle, Map, TileLayer } from "react-leaflet"

const StyledContact = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .container {
    box-sizing: border-box;
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
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100% + 130px);
    margin-left: -55px;
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
    height: auto;
    .container {
    width: 100%;
    padding: 10px;
      input, textarea, button {
        margin-left: 0;
      }
    &:nth-of-type(1) {
    display: none;
    }
    }
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
      margin: 0;
    }
    label {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      margin-right: 5px;
      margin-bottom: 14px;
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
      margin-top: 14px;
      display: inline-block;
      background: #0460FF;
      color: #fff;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 15px;
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
  @media (max-width: 575.98px) {
      
  }
  }
`

class Contact extends React.Component {
  render() {
    const position = [51.66, 16.08]
    return (
      <StyledContact id="contact">
        <div className="container">
          <Map center={position} zoom={11}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={position} radius={7000} fillColor="blue"/>
          </Map>
        </div>
        <div className="container">
          <form name="contact" method="post" data-netlify="true" action="https://formspree.io/kontakt@lubiecki.pl">
            <p className="form-container">
              <label>
                Imię
                <input type="text" name="name" id="name" />
              </label>
              <label>
                Adres email
                <input type="email" name="email" id="email" />
              </label>
            </p>
            <label>
              Temat
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Wiadomość
              <textarea name="message" id="message" rows="5" />
            </label>
            <input type="hidden" name="_language" value="pl" />
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
      </StyledContact>
    )
  }
}

export default Contact
