import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Fourth from './4'
import FourthNo from './4No'
class Third extends React.Component {
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
                }}> Do you have any of these symptoms</h4>
              <p style={{
                  textIndent: "20px",
                }}> Severe breathing difficulties, breathlessness, chest pain, constant fever, 
                Headache, Muscle pain for more than 72 hours</p>
              
              <br />
              <br />
              <br />
              <BrowserRouter>
              <Link to="/no3"> <button className="noButton">No</button> </Link>
              <Link to="/yes3"> <button class="yesButton"> Yes</button>  </Link>
              <br/><br/>
              <Route path="/no3"><FourthNo /></Route>
              <Route path="/yes3"><Fourth /></Route>
              </BrowserRouter>
              <br/><br/>
            </MaterialUI.Paper>
        </center>
            </div>
        );
    }
}
                
export default Third