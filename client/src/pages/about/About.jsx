import React from "react";
import "../../App.css";
import "../home/home.css";
import "./about.css";

function About() {
  return (
    <div className="pagesContainer home  ">
      <div className="homePageLeft aboutText">
        <div className=" textBox aboutMe">
          <h1>About me </h1>

          <h3> who am? </h3>
          <p>
            my name is Tahrer, I am a Full Stack Developer who believes in
            making the world a better place by technology.
          </p>
          <h3> Where I am From?</h3>
          <p>
            I was born and raised in Jerusalem and currently reside in Haifa{" "}
          </p>
        </div>
        <div className=" textBox aboutTheApp">
          <h1>About the App </h1>

          <h3> about the idea </h3>
          <p>
            The wild pigs of Haifa have invaded almost all the city. as a
            stranger, I didn't know where I can be without meeting them.
          </p>
          <h3> how it is work ? </h3>
          <p>
            the app shows all the locations of spotted boars in the last 48
            hours. as well as the most affected neighborhoods.{" "}
          </p>
        </div>

        <div className=" textBox nextLevel">
          <h1> next level </h1>
          <h3> short term targets? </h3>
          <p>
            to send notifications to subscribers and provide help in emergency
            cases. (under development)
          </p>
          <h3> long term targets? </h3>
          <p>to collaborate with the authorities and go global.</p>
        </div>
      </div>

      <div className="aboutRight"> 
      <div className="imgBox box-1"></div>
      <div className="imgBox box-2"></div>
      <div className="imgBox box-3"></div>
      </div>
    </div>
  );
}
export default About;
