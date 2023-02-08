import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import { useState } from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
  },
  imageStyle: {
    height: "600px",
    width: "528px",
    backgroundColor: "white"
  }
};

const About = () => {
  return (
    <div class="row" style={styles.wrapper}>
      <div class="col s4 offset-s4">
        <div class="card hoverable">
          <div class="card-image">
            <img src={profilePic} alt="Profile picture of myself" style={styles.imageStyle} draggable="false"/>
          </div>
          <div class="card-content">
            <p>
              I am a 25 year old Gamer at heart that has been gaming since I can
              remember. I never really took the time to look into how a game was
              made until recently when I was introduced into the coding world. I
              am currently helping dev for a popular game called GTAV (FiveM).
              This is where my passion for taking the next step in my developing
              career stems from. For the most part I can understand how to read
              code but wanted to take it a step further and understand how to
              write code from scratch so here we are. I have spent the last 6
              months self learning coding which has been a journey in itself so
              I felt it was time to go back to school to get a better
              understanding. With that being said, when i'm not at my computer I
              enjoy watching sports and spending quality time with my family
              along with outdoor adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
