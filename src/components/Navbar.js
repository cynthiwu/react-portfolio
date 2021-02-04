import React from "react";
import "./style.css";

function Navbar() {
  return (
  
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 id="navhead"><b>Cynthia Wu</b></h1>
                <span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </span>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="nav-link" href="../index.html">About</a>
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                    <a class="nav-link" href="contact.html">Contact</a>
                </div>
            </div>
        </nav>
    </header>
)

}

export default Navbar;