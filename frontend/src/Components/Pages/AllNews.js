import React, { Component } from "react";
import News from "./News";
import { Animated } from "react-animated-css";
import Loader from "../Extras/Loader";
import Footer from './footer'
export default class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gok: [],
      who: [],
      all: [],
      showedIndex: -1,
      isLoading: false
    };
  }
  componentDidMount() {
    fetch("https://covid19newsapi.herokuapp.com/news")
      .then(response => response.json())
      .then(res => {
        res["all"].sort((a, b) => {
          let ad = new Date(a.pubdate),
            bd = new Date(b.pubdate);
          return bd - ad;
        });
        this.setState({
          all: res["all"],
          isLoading: true
        });
      });
  }
  render() {
    return (
      <>
        {this.state.isLoading === true ? (
          <div>
            <div style={{}}>
              <center><h1 style={{fontSize:"xx-large" }}>All News</h1></center>
              {this.state.all.map(news => (
                <Animated animationIn="fadeInUp" animationInDuration={2000}>
                  {" "}
                  <News
                    key={this.state.all.indexOf(news)}
                    showedIndex={this.state.showedIndex}
                    ShowedNews={this.ShowedNews}
                    index={this.state.all.indexOf(news)}
                    title={news.title}
                    content={news.description}
                    url={news.url}
                    time={news.pubdate}
                  />
                </Animated>
              ))}
              <br />
              {window.innerWidth > 800 ? (
                <Footer/>
              ) : (
                <>
                  <br />
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
  ShowedNews = i => {
    if (i === undefined)
      this.setState({
        showedIndex: -1
      });
    else
      this.setState({
        showedIndex: i
      });
  };
}

//  http://covid19newsapi.herokuapp.com/news
