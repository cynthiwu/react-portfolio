import React, { Component } from "react";
import Navbar from "./Navbar";
// import AboutMe from "./AboutMe";
// import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

class PortfolioContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Contact></Contact>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}



export default PortfolioContainer;