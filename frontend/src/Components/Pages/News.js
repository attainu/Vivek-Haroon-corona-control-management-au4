import React, { Component } from "react";
import * as MaterialUI from "@material-ui/core";
import { Animated } from "react-animated-css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.showedIndex === this.props.index) {
      return (
        <center>
          <Animated animationIn="fadeIn" animationInDuration={1500}>
            <MaterialUI.Paper
              onClick={this.changeShowContent}
              elevation={5}
              style={{
                width:
                  window.innerWidth > 800
                    ? window.innerWidth * 0.6
                    : window.innerWidth,
                marginTop: "10px",
              }}
            >
              <h4
                onClick={this.changeShowContent}
                style={{
                  cursor: "pointer",
                  fontSize: window.innerWidth > 800 ? 25 : 20,
                }}
              >
                {this.props.title}
              </h4>
              <p
                style={{
                  textIndent: "20px",
                }}
              >
                {this.props.content}
              </p>
              {this.props.url ? (
                <MaterialUI.Button color="primary" href={this.props.url}>
                  More Details
                </MaterialUI.Button>
              ) : null}
              <br />
              Published On :
              <div>{new Date(this.props.time).toLocaleString()}</div>
              <br />
              <br />
            </MaterialUI.Paper>
          </Animated>
        </center>
      );
    } else {
      return (
        <center>
          <MaterialUI.Paper
            onClick={this.changeShowContent}
            elevation={5}
            style={{
              width:
                window.innerWidth > 800
                  ? window.innerWidth * 0.6
                  : window.innerWidth,
              marginTop: "10px",
            }}
          >
            <br />
            <h4
              onClick={this.changeShowContent}
              style={{
                cursor: "pointer",
                textAlign: "center",
                fontSize: window.innerWidth > 800 ? 25 : 20,
              }}
            >
              {this.props.title}
            </h4>
            Published On:
            <div>{new Date(this.props.time).toLocaleString()}</div>
            <br />
          </MaterialUI.Paper>
        </center>
      );
    }
  }

  changeShowContent = () => {
    if (this.props.showedIndex === this.props.index)
      this.props.ShowedNews(undefined);
    else this.props.ShowedNews(this.props.index);
  };
}
