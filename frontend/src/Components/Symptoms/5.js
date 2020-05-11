import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Final from './final'
import FinalNo from './finalNo'
class Fifth extends React.Component {
    render(){
        return(
            <div>
                <center>
                
            <MaterialUI.Paper
              onClick={this.changeShowContent}
              elevation={5}
              style={{
                width:
                  window.innerWidth > 800
                    ? window.innerWidth * 0.6
                    : window.innerWidth,
                marginTop: "30px",
                marginBottom : "20px",
              }}>
              <h4 onClick={this.changeShowContent}
                style={{
                  cursor: "pointer",
                  fontSize: window.innerWidth > 800 ? 25 : 20,
                }}> Do you have any of the disease of the following  </h4>
              <p style={{
                  textIndent: "20px",
                }}>Hypertension, Diabetes, Cardiovascular disease, Chronis respiratory disease, Low defence, Cancer </p>
              
              <br />
              <br />
              <br />
              <BrowserRouter>
              <Link to="/no5"> <button className="noButton">No</button> </Link>
              <Link to="/yes5"> <button class="yesButton"> Yes</button>  </Link>
              <br/><br/>
              <Route path="/no5"><FinalNo /></Route>
              <Route path="/yes5"><Final /></Route>
              </BrowserRouter>
              <br/><br/>
            </MaterialUI.Paper>
        </center>
            </div>
        );
    }
}
                
export default Fifth