import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Fifth from './5'
import FifthNo from './5No'
class Fourth extends React.Component {
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
                }}> Do you work close contact with patients in health care facilities or residents of nursing homes </h4>
              <p style={{
                  textIndent: "20px",
                }}> </p>
              
              <br />
              <br />
              <br />
              <BrowserRouter>
              <Link to="/no4"> <button className="noButton">No</button> </Link>
              <Link to="/yes4"> <button class="yesButton"> Yes</button>  </Link>
              <br/><br/>
              <Route path="/no4"><FifthNo /></Route>
              <Route path="/yes4"><Fifth /></Route>
              </BrowserRouter>
              <br/><br/>
            </MaterialUI.Paper>
            
        </center>
            </div>
        );
    }
}
                
export default Fourth