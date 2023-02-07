import React from "react";
import { AiFillGithub } from "react-icons/ai";

const styles = {
  icons: {
    fontSize: "40px",
    margin: "0 10",
  },
  aTag: {
    color: "#ffffff",
  },
  container: {
    minHeight: "100vh",
    textAlign: "center",
  },
  cardImage: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  },
};

const projects = [
  {
    id: 1,
    title: "MVC Tech Blog",
    image:
      "https://github.com/Cujion/MVC-Tech-Blog/raw/main/public/assets/images/homepage.png",
    repo: "https://github.com/Cujion/MVC-Tech-Blog",
  },
  {
    id: 2,
    title: "SQL Employee Tracker",
    image:
      "https://github.com/Cujion/SQL-Employee-Tracker/raw/main/assets/images/homescreen.png",
    repo: "https://github.com/Cujion/SQL-Employee-Tracker",
  },
  {
    id: 3,
    title: "Express Note Taker",
    image:
      "https://github.com/Cujion/Express.js-Note-Taker/raw/main/assets/images/homepage.png",
    repo: "https://github.com/Cujion/Express.js-Note-Taker",
  },
  {
    id: 4,
    title: "5 Day Weather Forecast",
    image:
      "https://github.com/Cujion/5-day-weather-forecast-api/raw/main/assets/images/single-city-display.png",
    repo: "https://github.com/Cujion/5-day-weather-forecast-api",
  },
  {
    id: 5,
    title: "Work Day Planner",
    image:
      "https://github.com/Cujion/Daily-Planner/raw/main/assets/images/past-present-future.png",
    repo: "https://github.com/Cujion/Daily-Planner",
  },
  {
    id: 5,
    title: "Trivia Challenge",
    image:
      "https://github.com/Cujion/Knowledge-Quiz/raw/main/assets/images/start.png",
    repo: "https://github.com/Cujion/Knowledge-Quiz",
  },
];

function Portfolio() {
  return (
    <div className="container" style={styles.container}>
      <div className="row">
        {projects.map((project) => (
          <div className="col s12 m6">
            <div className="card small hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  style={styles.cardImage}
                  className="activator"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="card-content">
              <span class="card-more activator grey-text text-darken-4"><i
            class="material-icons right">more_vert</i></span>
                <a
                  style={styles.aTag}
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="card-icon activator grey-text text-darken-4">
                    <AiFillGithub style={styles.icons} />
                    {project.title}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
