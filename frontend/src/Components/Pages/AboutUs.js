import React, { Component } from "react";
import '../Styles/about.css'
import haroon from '../Media/haroon.jfif'
import vivek from '../Media/vivek.jfif'
import Footer from "./footer";


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <>

        <center>
            <b
              style={{

                fontFamily: "arch",
                fontSize: 50
              }}
            >
              Who we are ?
            </b>
            <p
              style={{

                fontFamily: "arch",
                width: window.innerWidth > 800 ? "50%" : window.innerWidth
              }}
            >
              We are a group of dedicated students of AttainU on a 
              mission to help the public in these corona effected situation as a part of Our
              crapstone project that have to do as part of learnin MERN App. We try to provide
              latest updates about Covid19 from MoHFW, WHO, GoK Direct.{" "}
            </p>
            <b
              style={{

                fontFamily: "arch",
                fontSize: 50,
                textAlign: "center",
                justifyContent: "center"
              }}
            >
              Meet Our Team
            </b>
            <br />
            <br />
            <div
              style={{
                display: "flex",

                fontFamily: "arch",
                justifyContent: 'center'
              }}
            >
              <div className="image-container">
                <img src={haroon} />
                <b>Haroon Sidheekhi K T</b>
                <p className="desig">Eagle Batch - AttainU</p>
              </div>
              <div className="image-container">
                <img src={vivek} />
                <b>Vivek P A</b>
                <p className="desig">Eagle Batch - AttainU</p>
              </div>
            </div>


              <h3>Contact Us</h3>
              <p><i className="fa fa-envelope" ></i> Mail us : attainu@gmail.com</p>
              <p><i className="fa fa-phone"/>  Phone : +91 98654 55429</p>


           <div >
            <a className="fa fa-facebook" style={{ margin: 20, color: ' #3b5998', fontSize: 30, textDecoration: 'none' }} href="#" />
            <a className="fa fa-instagram" style={{ margin: 20, fontSize: 30, textDecoration: 'none' }} href="#" />
            <a className="fa fa-youtube" style={{ margin: 20, color: ' #000', fontSize: 30, textDecoration: 'none' }} href="#" />

          </div>
        </center>
              <br/>


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
