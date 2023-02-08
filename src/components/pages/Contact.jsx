// PULLING IN REQUIRED IMPORTS
import React from "react";

// ELEMENT STYLING
const styles = {
  container: {
    minHeight: "100vh",
    marginTop: "25vh",
  },
  sectionStyle: {
    padding: "10px",
  },
};

// FUNCTION TO HANDLE SUBMIT AND GRAB THE VALUES POSTED IN CONTACT FORM
const handleSubmit = () => {
  let firstNameEl = document.querySelector("#first-name").value;
  let lastNameEl = document.querySelector("#last-name").value;
  let emailEl = document.querySelector("#email").value;
  let messageEl = document.querySelector("#message").value;
// IF STATEMENT MAKING SURE ALL INPUT FIELDS ARE FILLED OUT
  if (
    firstNameEl !== "" ||
    lastNameEl !== "" ||
    emailEl !== "" ||
    messageEl !== ""
  ) {
    alert("Contact form submitted");
  } else {
    alert("Must fill out form completely");
  }
};

// CONTACT FUNCTION TO RENDER HTML PAGE LAYOUT FOR CONTACT FORM PAGE 
function Contact() {
  return (
    <div className="container" style={styles.container}>
      <div>
        <section id="new-post" className="row card" style={styles.sectionStyle}>
          <form>
            <h5 className="center">Contact Me</h5>
            <div className="row">
              <div className="input-field col s12 m6">
                <input placeholder="First Name" id="first-name" type="text" />
              </div>
              <div className="input-field col s12 m6">
                <input placeholder="Last Name" id="last-name" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Email" id="email" type="email"></input>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea placeholder="Message" id="message" rows="6" />
              </div>
            </div>
          </form>
        </section>
        <div className="row">
          <button
            onClick={handleSubmit}
            className="btn waves-effect waves-light col s6 offset-s3 l4 offset-l4"
            type="button"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
