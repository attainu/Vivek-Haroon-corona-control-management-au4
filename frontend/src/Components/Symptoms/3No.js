import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'
class ThirdNo extends React.Component {
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
                }}> Dry coughing is also  one of the primary symptom of Coronavirus disease,
                So If you dont have Dry coughing, tiredness or severe fever you dont have to worry much..
                 So please stay home and prevent the spread of covid 19 </h4><br/>
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
                
export default ThirdNo