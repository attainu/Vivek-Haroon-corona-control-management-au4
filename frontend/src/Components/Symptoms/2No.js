import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
class SecondNo extends React.Component {
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
              }}> <br/><br/>
              <h4 onClick={this.changeShowContent}
                style={{
                  cursor: "pointer",
                  fontSize: window.innerWidth > 800 ? 25 : 20,
                }}> Fever is the one of the primary symptom of Coronavirus disease,
                So If you dont have fever, tiredness or dry cough you dont have to worry much..
                 So please stay home and prevent the spread of covid 19</h4>
              <p style={{
                  textIndent: "20px",
                }}>  </p>
              
              <br />
              <br />
              <br />
              <br/><br/><br />
              
            </MaterialUI.Paper>
           
        </center>
            </div>
        );
    }
}
                
export default SecondNo