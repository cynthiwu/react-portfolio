import React from "react";
import "./style.css";
import Card from "./Card";
import projects from "../projects.json";

function Portfolio() {
    return (

    <React.Fragment>

        <main role="main" className="container" id="contain-style">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
                <h2>portfolio<hr /></h2>
                
                    {projects.map(item => <Card {...item}/>)}
                    
                </div>
            </div>
        </main>

    </React.Fragment>

    )
};

export default Portfolio;