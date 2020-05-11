import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
import Second from './2'
import SecondNo from './2No'
class First extends React.Component {
    render(){
        return(
            <div>
                <center>
                <b style={{
                fontFamily: "arch",
                fontSize: 50
              }}> Symptoms of covid-19 </b>
            <Animated animationIn="fadeIn" animationInDuration={1500}>
                <MaterialUI.Paper
              onClick={this.changeShowContent}
              elevation={5}
              style={{
                width:
                  window.innerWidth > 800
                    ? window.innerWidth * 0.6
                    : window.innerWidth,
                marginTop: "30px",
              }}>
              <h4 onClick={this.changeShowContent}
                style={{
                  cursor: "pointer",
                  fontSize: window.innerWidth > 800 ? 25 : 20,
                }}>Do you have the fever around 38 C or more in the last 24 hour  </h4>
              <p style={{
                  textIndent: "20px",
                }}> </p>
              
          
              <br />
              <br />
              <BrowserRouter>
              <Link to="/no"> <button className="noButton">No</button> </Link>
              <Link to="/yes"> <button class="yesButton"> Yes</button>  </Link>
              <br/><br/>
              <Route path="/no"><SecondNo /></Route>
              <Route path="/yes"><Second /></Route>
              </BrowserRouter>
            </MaterialUI.Paper>
            <br />
              <br />
              <br /><br />
              <br /><br/>
              <br /><br />
              <br />
              <br /><br />
              <br />
              <br /><br />
              <br />
              
            <Footer/>
            </Animated>
        </center>
            </div>
        );
    }
}
                
export default First