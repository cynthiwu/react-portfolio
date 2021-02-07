import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import "./style.css";

class PortfolioContainer extends Component {

    render() {
        return (
            <Router basename="react-portfolio">
                <React.Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <AboutMe />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route>
                            <AboutMe />
                        </Route>
                    </Switch>
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}



export default PortfolioContainer;