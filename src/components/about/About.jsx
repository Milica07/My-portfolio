import React from 'react';
import "./about.css";
import me from "../../img/me.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={me}
                alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I have finished master studies at faculty of Philosophy, field pedagogy, and I got certificate for 
          systemic family adviser.
        </p>
        <p className="a-desc">
          When I was trying to get job I had free time so I decided to inroll initial programming course 
          in Vivify Academy, after initial course I inrolled basic web programming course and advanced web development course...That is short story how I fell in love with programming.  
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Full-stack web programming</h4>
            <p className="a-award-desc">
              Advanced Web Development
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About