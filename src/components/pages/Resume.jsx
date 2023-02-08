import React from "react";
import resumePic from "../../assets/images/resume.png";
import { VscGoToFile } from "react-icons/vsc";

const styles = {
  container: {
    minHeight: "100vh",
  },
  imageStyle: {
    width: "400px",
  },
  icons: {
    fontSize: "40px",
    margin: "0 10",
    align: "center"
  },
};

function Resume() {
  return (
    <div className="container" style={styles.container}>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div className="card hoverable">
            <div className="card-image">
              <img src={resumePic} alt="resume" />
            </div>
                <a
                  href="https://drive.google.com/file/d/1aTCe-ZpjXTj_d9HddBnZoZduIVoF0EhE/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGoToFile style={styles.icons}/>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
