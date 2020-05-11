import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
class FinalNo extends React.Component {
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
                }}> Those who have these disease there is a high chance of spreading of the disease,
                But there is a good chance to effect those who dont have these diseases also. So take care to stay at home.
                 to avoid a higher risk for developing more serious complications from COVID-19 illness. </h4>
              <p style={{
                  textIndent: "20px",
                }}> Content </p>
              
              <br />
              <br />
              <br />
              <br/><br/> <br />
              <br />
              <br/><br/> <br />
              <br />
              <br/><br/> <br />
            
            </MaterialUI.Paper>
           
        </center>
            </div>
        );
    }
}
                
export default FinalNo