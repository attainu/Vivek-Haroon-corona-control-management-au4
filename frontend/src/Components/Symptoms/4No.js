import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
class FourthNo extends React.Component {
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
                }}> These are the mild symptoms of Covid-19,So you dont have to worry at all.
                If you find any of it, then you may have to go self isolation this time, 
                And seek attention of the governmental health bodies. </h4>
              <p style={{
                  textIndent: "20px",
                }}> Content </p>
              
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
                
export default FourthNo