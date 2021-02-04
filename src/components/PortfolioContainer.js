import React, { Component } from "react";
import Navbar from "./Navbar";
// import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

class PortfolioContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Portfolio></Portfolio>
            </React.Fragment>
        );
    }
}



export default PortfolioContainer;