import React, { useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    marginTop: "25vh",
  },
  sectionStyle: {
    padding: '10px'
  },
};

const handleSubmit = () => {
  
}

function Contact() {
  return (
    <div className="container" style={styles.container}>
      <div>
        <section id="new-post" className="row card" style={styles.sectionStyle}>
          <form>
            <h5 className="center">Contact Me</h5>
            <div className="row">
              <div className="input-field col s12 m6">
                <input placeholder="First Name" id="First Name" type="text" />
              </div>
              <div className="input-field col s12 m6">
                <input placeholder="Last Name" id="Last Name" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="validate"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea placeholder="Message" id="textarea1" rows="6" />
              </div>
            </div>
          </form>
        </section>
        <div className="row">
          <button
            class="btn waves-effect waves-light col s2 offset-s5"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
