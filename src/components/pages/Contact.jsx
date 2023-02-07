import React from "react";

function Contact() {
  return (
    <div className="container">
      <section id="new-post" className="row card">
        <form id="slide-out" />
        <h5 className="center">Contact Me</h5>
        <div className="row">
          <div className="input-field col s12 m6">
            <input id="First Name" type="text" />
            <label for="text">First Name</label>
          </div>
          <div className="input-field col s12 m6">
            <input id="Last Name" type="text" />
            <label for="text">Last Name</label>
          </div>
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" />
            <label for="textarea1">Message</label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
