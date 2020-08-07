import React, { Component } from "react";
import * as MaterialUI from "@material-ui/core";
import Footer from './footer'

export default class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
          <center>
            <h1 style={{ fontFamily: "Poppins,sans-serif", fontSize:"xx-large", borderWidth:"60px" }}>
              Helpful Sources
            </h1>
            <MaterialUI.Paper
              elevation={3}
              style={{
                fontFamily: "Poppins,sans-serif",
                width:
                  window.innerWidth > 800
                    ? window.innerWidth * 0.6
                    : window.innerWidth,
                borderRadius: 5
              }}
            >
              <h4> Ministry of Health and Family Welfare</h4>
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://www.mohfw.gov.in/"
              >
                https://www.mohfw.gov.in/
              </a>
              <h4 style={{ fontFamily: "Poppins,sans-serif" }}>
                Real Time World Statistics
              </h4>
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://www.worldometers.info"
              >
                https://www.worldometers.info
              </a>
              <h4 style={{ fontFamily: "Poppins,sans-serif" }}>
                {" "}
                World Health Organization
              </h4>
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://www.who.int/"
              >
                https://www.who.int/
              </a>
              <br />
              whatsapp:{" "}
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://bit.ly/who-covid-19-whatsapp"
              >
                https://bit.ly/who-covid-19-whatsapp
              </a>
              <br />
              <br />
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://www.facebook.com/worldwideengineeringcommunity/videos/502978780383351/"
              >
                Animated statistics from @world_wide_engineeringcommunity
              </a>
              <br />
              <br />
              <h4>GoK Direct App (Goverment of Kerala)</h4>
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="https://play.google.com/store/apps/details?id=com.qkopy.prdkerala"
              >
                https://play.google.com/store/apps/details?id=com.qkopy.prdkerala
              </a>
            
              <h4>Disha Helpline : 1056</h4>
           
             <h4>Directorate of Health Services</h4>
              <a
                style={{
                  fontFamily: "Poppins,sans-serif",
                  textDecoration: "none"
                }}
                href="http://dhs.kerala.gov.in"
              >
                http://dhs.kerala.gov.in
              </a>
              <br/><br/>
              <br />
              <br />
            </MaterialUI.Paper>
          </center>
          <br />
          <br />

          {window.innerWidth > 800 ? (
            <Footer/>
          ) : (
            <>
              <br />
            </>
          )}
      </>
    );
  }
}
