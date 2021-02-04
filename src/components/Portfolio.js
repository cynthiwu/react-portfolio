import React from "react";
import "./style.css";

function Portfolio() {
    return (

    <React.Fragment>

        <main role="main" class="container" id="contain-style">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
                <h2>portfolio<hr /></h2>

                    <div class="card text-center float-left m-3">
                        <img class="portimage" src="./images/whatsfordinner.png" alt="What's for dinner project image" />
                        <div class="card-body">
                            <h5 class="card-title">What's for Dinner?</h5>
                            <a href="https://cynthiwu.github.io/whats-for-dinner/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/whats-for-dinner" class="card-text">Repository</a>
                        </div>
                    </div>

                    <div class="card text-center float-left m-3">
                        <img class="portimage" src="./images/eatburger.png" alt="Eat-Da-Burger project image" />
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <a href="https://salty-badlands-51907.herokuapp.com/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/eat-burger" class="card-text">Repository</a>
                        </div>
                    </div>

                    <div class="card text-center float-left m-3">
                        <img class="portimage" src="./images/weatherdashboard.png" alt="Weather dashboard project image" />
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <a href="https://cynthiwu.github.io/weather-dashboard/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/weather-dashboard" class="card-text">Repository</a>
                        </div>
                    </div>

                    <div class="card text-center float-left m-2">
                        <img class="portimage" src="./images/workdayscheduler.png" alt="Workday scheduler project image" />
                        <div class="card-body">
                            <h5 class="card-title">Workday Scheduler</h5>
                            <a href="https://cynthiwu.github.io/work-day-scheduler/">See it live!</a>
                            <br />
                            <a href="https://github.com/cynthiwu/work-day-scheduler" class="card-text">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </React.Fragment>

    )
};

export default Portfolio;