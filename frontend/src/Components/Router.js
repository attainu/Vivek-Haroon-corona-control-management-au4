import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './Styles/route.css'
import Home from './Pages/Home'
import AllNews from './Pages/AllNews'
import Sources from './Pages/Source'
import Predications from './Pages/Predictions'
import Swiper from './Extras/Drawer'
import About from './Pages/AboutUs'
import Symptoms from './Pages/Symptoms'
import Volunteer from './Pages/volunteer'
import Display from './Pages/admin'
import { push as Menu } from 'react-burger-menu';
import './Styles/sidebar.css';
export default class Router extends Component {
    
    render() {
        return (
            <div >
                <Menu>
        <Link to="/"> <button class="btn btn-success btn-block">
            Home
           </button> </Link>
        <Link to="/news"> <button class="btn btn-danger btn-block">
        <i class='fab fa-audible'/>
            News
          </button> </Link>
        <Link to="/predict"> <button class="btn btn-danger btn-block">
            Prediction
           </button> </Link>
        
          <Link to="/symptoms"> <button class="btn btn-danger btn-block">
          
            Symptoms
           </button> </Link>

          <Link to="/volunteer"> <button class="btn btn-danger btn-block">
           Volunteers
           </button> </Link>

          <Link to="/source"> <button class="btn btn-danger btn-block">
          
            Sources
           </button> </Link>
          <Link to="/about"> <button class="btn btn-secondary btn-block">
            About Us
          </button> </Link>
              </Menu>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/news"><AllNews /></Route>
                        <Route path="/symptoms"><Symptoms/></Route>
                        <Route path="/volunteer"><Volunteer/></Route>
                        <Route path="/predict"><Predications /></Route>
                        <Route path="/source"><Sources /></Route>
                        <Route path="/about"><About /></Route>
                        <Route path="/admin007"><Display /></Route>
            </div>
        )

    }
}