import React from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";
import Footer from './../Pages/footer'
import './../Styles/symptoms.css'

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
                }}>If you have the above then there is a high chance to effect the corona disease. Patient who effected the corona 
                 virus with these diseases is in the most extreme condition.
                  You have to get in contact with the health department as soon as possible. 
                And have to try to stay in quarantine till their arrival as a self isolation. Avaoid the contact with anyone.
                 And use the any Components thats prescribed only for you.
                  </h4>
              <p style={{
                  textIndent: "20px",
                }}> </p>
              
              <br />
              <br />
              <br />
              <br/><br/>
            </MaterialUI.Paper>
            
        </center>
            </div>
        );
    }
}
                
export default Fourth