import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
import Third from './3'
import ThirdNo from './3No'
class Second extends React.Component {
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
              }}>
              <h4 onClick={this.changeShowContent}
                style={{
                  cursor: "pointer",
                  fontSize: window.innerWidth > 800 ? 25 : 20,
                }}> Do you have any breathing problem like dry coughihng or sore throat</h4>
              <p style={{
                  textIndent: "20px",
                }}>If it's only a runny nose, please select NO</p>
              
              <br />
              <br />
              <br />
              <BrowserRouter>
              <Link to="/no2"> <button className="noButton">No</button> </Link>
              <Link to="/yes2"> <button class="yesButton"> Yes</button>  </Link>
              <br/><br/>
              <Route path="/no2"><ThirdNo /></Route>
              <Route path="/yes2"><Third /></Route>
              </BrowserRouter>
              <br/><br/>
            </MaterialUI.Paper>
           
        </center>
            </div>
        );
    }
}
                
export default Second