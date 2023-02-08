import React from "react";
import { AiFillGithub } from "react-icons/ai";

const styles = {
  icons: {
    fontSize: "40px",
    margin: "0 10",
  },
  aTag: {
    color: "#000000",
  },
  container: {
    minHeight: "100vh",
    textAlign: "center",
  },
  card: {
    height: "400px",
  },
};

const projects = [
  {
    id: 1,
    title: "MVC Tech Blog",
    image:
      "https://github.com/Cujion/MVC-Tech-Blog/raw/main/public/assets/images/homepage.png",
    repo: "https://github.com/Cujion/MVC-Tech-Blog",
    description:
      "This application is a complete front-end and back-end webpage that handles all user input through Model-View-Controllers also known as MVC",
  },
  {
    id: 2,
    title: "SQL Employee Tracker",
    image:
      "https://github.com/Cujion/SQL-Employee-Tracker/raw/main/assets/images/homescreen.png",
    repo: "https://github.com/Cujion/SQL-Employee-Tracker",
    description:
      "This application is a MySQL driven database application. This application is ran completely in your terminal. Once started you are prompted with a nice Employee Manager drawn out along with a list of options on what you would like to do.",
  },
  {
    id: 3,
    title: "Express Note Taker",
    image:
      "https://github.com/Cujion/Express.js-Note-Taker/raw/main/assets/images/homepage.png",
    repo: "https://github.com/Cujion/Express.js-Note-Taker",
    description:
      "This application is an Express.js application that can be used to write and save notes. then will use Express.js back end to save and retrieve note data from a JSON file.",
  },
  {
    id: 4,
    title: "5 Day Weather Forecast",
    image:
      "https://github.com/Cujion/5-day-weather-forecast-api/raw/main/assets/images/single-city-display.png",
    repo: "https://github.com/Cujion/5-day-weather-forecast-api",
    description:
      "This application is an open weather api that allows you to search any city in the search input and it will display the current days weather as the main content area along with the following five day forecast below.",
  },
  {
    id: 5,
    title: "Work Day Planner",
    image:
      "https://github.com/Cujion/Daily-Planner/raw/main/assets/images/past-present-future.png",
    repo: "https://github.com/Cujion/Daily-Planner",
    description:
      "This is a Daily Organizing Planner that allows you to plan out your daily schedule and save that input to your local storage upon clicking the save icon on the right side of each section. This script uses Dayjs to update the local date and time in order to color coordinate each time slot.",
  },
  {
    id: 6,
    title: "Trivia Challenge",
    image:
      "https://github.com/Cujion/Knowledge-Quiz/raw/main/assets/images/start.png",
    repo: "https://github.com/Cujion/Knowledge-Quiz",
    description:
      "This project gives you a very good understanding of how functions work along with how to use javascript to add functionality to your webpage.",
  },
];

function Portfolio() {
  return (
    <div className="container" style={styles.container}>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col s12 m6">
            <div className="card small hoverable" style={styles.card}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {project.title}
                  <i className="material-icons right">more_vert</i>
                </span>
                <a href={project.repo} style={styles.aTag}>
                  <AiFillGithub style={styles.icons} />
                </a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {project.title}
                  <i className="material-icons right">close</i>
                </span>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
