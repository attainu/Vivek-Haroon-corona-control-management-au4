import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
class FifthNo extends React.Component {
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
                }}>You have avoided a good chance of corona spreading. Going under the quarantine is better way to stop the spreading.
                If you or the contacted person doesnt have gone through a well quarantined system, thats a extreme critical situation.
                So you may have to go quarantine and self isolation under the instruction of governmental bodies.
                </h4>
              <p style={{
                  textIndent: "20px",
                }}>  </p>
              
              <br />
              <br />
              <br />
              <br/><br/><br />
              <br/><br/> <br />
            </MaterialUI.Paper>
           
        </center>
            </div>
        );
    }
}
                
export default FifthNo