import React from "react";
import "./style.css";

function Contact() {
    return (

    <React.Fragment>

        <main role="main" className="container" id="contain-style">
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-9 p-4 about-me">
                <h2>Contact</h2>
                <hr/>
                <form className="ml-2">
                    <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="Name" className="form-control formstyle" id="exampleFormControlInput1" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleFormControlInput1">Email Address</label>
                    <input type="email" className="form-control formstyle" id="exampleFormControlInput1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control formstyle" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button id="btnstyle" type="submit" className="btn btn-primary py-3 px-4">Submit</button>
                </form>
                </div>
            </div>
        </main>
    
    </React.Fragment>
    )
};

export default Contact;