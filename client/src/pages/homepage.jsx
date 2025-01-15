import React from "react";
import { Link } from "react-router-dom";
import OldroomJPG from "../assets/oldroom.jpg";
import HalfwayroomJPG from "../assets/halfway.jpg";
import NewroomJPG from "../assets/newroom.jpg";
import "./Homepage.css"; // Import the new CSS file

function Homepage() {
  return (
    <main className="main">
      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome to the Arizona Refugee Center</h1>
      </div>

    <div><p>    Building bridges of hope for all of those who come through our doors. 
    </p></div>
    <div><p>With extensive case management and connecting immigrants  and refugees to  much needed resources. 
    </p></div>
    <div><p>Making an impact one by one.  
    </p></div>


      {/* Mission Section */}
      <section className="mission">
        <h2>Mission</h2>
        <div className="imageContainer">
          <div className="imageItem">
            <p className="LCText">Before</p>
            <img
              className="frontPics"
              src={OldroomJPG}
              alt="Before Construction"
            />
          </div>
          <div className="imageItem">
            <p className="LCText">During</p>
            <img
              className="frontPics"
              src={HalfwayroomJPG}
              alt="During Construction"
            />
          </div>
          <div className="imageItem">
            <p className="LCText">After</p>
            <img
              className="frontPics"
              src={NewroomJPG}
              alt="After Construction"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
