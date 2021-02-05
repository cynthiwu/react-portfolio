import React from "react";
import "./style.css";

function Footer() {
    return (

    <React.Fragment>

        <footer class="footer">
            <div class="footer-copyright text-center p-4">
                <span class="icon-span">
                    <a id= "linkedin" class = "icon" href="https://www.linkedin.com/in/cynthia-wu-6824091a/" target="_blank" rel="noreferrer"><span class="mr-2 fab fa-linkedin"></span></a>
                </span>
                <span class="icon-span">
                    <a id= "github" class = "icon" href="https://github.com/cynthiwu" target="_blank" rel="noreferrer"><span class="mr-2 fab fa-github"></span></a>
                </span>
                <span class="icon-span">
                    <a id = "resume" class = "icon" href="./assets/Wu, Cynthia - Resume - 2020 .pdf" target="_blank" rel="noreferrer"><span class="mr-2 far fa-file-pdf"></span></a>
                </span>
            </div>
        </footer>
    
    </React.Fragment>
    )
};

export default Footer;