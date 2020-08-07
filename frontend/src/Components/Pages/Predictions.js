import React, { Component } from 'react'
import Predict from '../Graphs/Predict'
import PredictText from '../Graphs/PredictText';
import '../Styles/home.css'
import { url } from '../Configure';
import Loader from '../Extras/Loader';
import Footer from "./footer";

export default class Predications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    componentDidMount() {
        fetch(`${url}/predictionPage`).then(r => r.json())
            .then(res => {
                this.setState({ isLoading: true })
            })
    }
    render() {
        const para = (
            <p style={{
                fontFamily: 'Lato',
                color: 'gray',
                width: window.innerWidth > 800 ? "60%" : ''
            }}>
                The system is equipped with latest tools and techniques 
                to predict future cases of positive confirmation of covid-19
                by automatically learning the case histories, pattern of various cases and trends.
                The algorithm shall predict daily probabilities by updating with Worldometer, WHO,
                Ministry of Health and Family Welfare.
            </p>
        )

        return (
            <>
                {this.state.isLoading === true ? <div>
                       
                        <center>
                        <h1 style={{fontSize:"xx-large" }}>Statistical Projection</h1>
                            {window.innerWidth < 800 ? para : null}
                            <br />
                            <PredictText />
                            <Predict />

                            <br />
                            {window.innerWidth > 800 ? para : null}
                        </center>

                        <br /><br /><br />
                        {
                            window.innerWidth > 800 ?
                                <Footer/>
                                :
                                <>
                                    <br /><br />
                                </>
                        }

                </div> : <Loader />}
            </>
        )
    }
}