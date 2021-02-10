import React from "react";
import "./style.css";

function Footer() {
    return (

    <React.Fragment>

        <footer className="footer">
            <div className="footer-copyright text-center p-4">
                <span className="icon-span">
                    <a id= "linkedin" className = "icon" href="https://www.linkedin.com/in/cynthia-wu-6824091a/" target="_blank" rel="noreferrer"><span className="mr-2 fab fa-linkedin"></span></a>
                </span>
                <span className="icon-span">
                    <a id= "github" className = "icon" href="https://github.com/cynthiwu" target="_blank" rel="noreferrer"><span className="mr-2 fab fa-github"></span></a>
                </span>
                <span className="icon-span">
                    <a id = "resume" className = "icon" href={process.env.PUBLIC_URL + "/images/Wu, Cynthia - Resume - 2020 .pdf"} target="_blank" rel="noreferrer"><span className="mr-2 far fa-file-pdf"></span></a>
                </span>
            </div>
        </footer>
    
    </React.Fragment>
    )
};

export default Footer;