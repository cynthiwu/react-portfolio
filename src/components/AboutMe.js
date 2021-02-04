import React from "react";
import "./style.css";

function AboutMe() {
    return (

    <React.Fragment>

        {/* <div class="left-design"></div> */}
        <div class="text-center mt-5">
            <img src="./images/aboutme.jpeg" alt="A photograph of me with the sun behind me." class="amimage"/>
        </div>
  
        <main role="main" class="container" id="contain-style">
            <section class="row">
                <div class="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
                    <h2>about me</h2>
                    <hr/>
                    <p>
                        Hello reader and welcome to my site! So you're here to learn a little more about me? I'll give you the run down. I'm an east-coast transplant who followed her yellow brick road to the beautiful city of Seattle, where I've been for the past 8 years with no intention of returning home. I currently reside in the funky little neighborhood of Fremont, where I live with my husband and cute kitten Kaya.
                    </p>
                    <p>
                        After relocating to the PNW, I had fallen into an in-house recruiting position with a large tech company headqaurtered here in Seattle (I'm sure you've heard of it). I've since then cycled through a startup before landing with my current employer, another large tech company (one you've also probably heard of). A recruiting role was in line with my educational background, Industrial / Organizational Psychology, so it felt like a role I should be happy with. But as it turns out, I'm not. That's the reason I'm here. These next 6 months will set the stage for the next phase in my career, and the byproducts will be featured on this site. Feel free to peruse at your leisure, and drop me a line if you have any questions.
                    </p>
                </div>
            </section>
        </main>
    
    </React.Fragment>
    )
};

export default AboutMe;