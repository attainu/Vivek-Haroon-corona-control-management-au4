import React from "react";
import logosm from "../Media/logosm.png";
import './../Styles/home.css'
class Footer extends React.Component {
    render(){
        return(
            
                <div className="footer">
                  <br />
                  <a href="#">
                    {" "}
                    <img
                      alt="lgosm"
                      src={logosm}
                      style={{
                        width: "75px",
                        height: "75px",
                        position: "absolute",
                        marginLeft: "20px",
                      }}
                    />
                  </a>
                  <center>
                    <a
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      <p style={{ color: "white" }}>
                        <b style={{ fontSize: 20 }}>
                          Corona Care System  |
                        </b>
                        <i style={{ fontSize: 14 }}>Powered By AttainU </i>
                      </p>
                    </a>
                  </center>
                  
                </div>
        );
    }
}
                
export default Footer