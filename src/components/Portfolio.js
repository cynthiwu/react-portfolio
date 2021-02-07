import React from "react";
import "./style.css";

function Portfolio() {
    return (

    <React.Fragment>

        <main role="main" className="container" id="contain-style">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
                <h2>portfolio<hr /></h2>

                    <div className="card text-center float-left m-3">
                        <img className="portimage" src={process.env.PUBLIC_URL + "/images/whatsfordinner.png"} alt="What's for dinner project image" />
                        <div className="card-body">
                            <h5 className="card-title">What's for Dinner?</h5>
                            <a href="https://cynthiwu.github.io/whats-for-dinner/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/whats-for-dinner" className="card-text">Repository</a>
                        </div>
                    </div>

                    <div className="card text-center float-left m-3">
                        <img className="portimage" src={process.env.PUBLIC_URL + "/images/eatburger.png"} />
                        <div className="card-body">
                            <h5 className="card-title">Eat-Da-Burger</h5>
                            <a href="https://salty-badlands-51907.herokuapp.com/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/eat-burger" className="card-text">Repository</a>
                        </div>
                    </div>

                    <div className="card text-center float-left m-3">
                        <img className="portimage" src={process.env.PUBLIC_URL + "/images/weatherdashboard.png"} alt="Weather dashboard project image" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <a href="https://cynthiwu.github.io/weather-dashboard/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/weather-dashboard" className="card-text">Repository</a>
                        </div>
                    </div>

                    <div className="card text-center float-left m-2">
                        <img className="portimage" src={process.env.PUBLIC_URL + "/images/workdayscheduler.png"} alt="Workday scheduler project image" />
                        <div className="card-body">
                            <h5 className="card-title">Workday Scheduler</h5>
                            <a href="https://cynthiwu.github.io/work-day-scheduler/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/work-day-scheduler" className="card-text">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </React.Fragment>

    )
};

export default Portfolio;