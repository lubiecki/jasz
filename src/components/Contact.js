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
  position: relative;
  color: #FFF;
  padding: 50px 0;
  .bg {
    background: #222;
    background-size: cover;
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .container {
    box-sizing: border-box;
    padding: 20px;
    width: 50%;
    height: 500px;
  }
  .leaflet-container {
    border-radius: 1%;
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
        border: none;
        padding: 10px 14px;
        box-sizing: border-box;
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
      background: #FFF;
      color: #333;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 15px;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      transition: 200ms ease;
      border: none;
      .text-container {
        z-index: 11;
        position: relative;
        color: #222;
        transition: 200ms ease;
      }
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
      &:active, &:focus, &:hover {
        background: #FFF;
        box-sizing: border-box;
        color: #FFF;
        transition: 200ms ease;
        .text-container {
          color: #FFF;
          transition: 200ms ease;
        }
        &::after {
          width: 100%;
          transition: 200ms ease;
        }
      }
    }
    @media (max-width: 575.98px) {
      margin-top: 50px;
    }
    }
  }
`

class Contact extends React.Component {
  render() {
    const position = [51.66, 16.08]
    return (
      <StyledContact id="contact">
        <div className="bg"></div>
        <div className="container">
          <Map center={position} zoom={11}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={position} radius={7000} fillColor="blue"/>
          </Map>
        </div>
        <div className="container">
          <form name="contact" method="post" data-netlify="true" action="https://formspree.io/kontakt@jasz-it.pl">
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
            <button type="submit">
              <span className="text-container">Wyślij wiadomość</span>
              </button>
          </form>
        </div>
      </StyledContact>
    )
  }
}

export default Contact
