// PULLING IN REQUIRED IMPORTS
import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

// ELEMENT STYLING
const styles = {
  navbar: {
    marginBottom: "30px",
  },
};

// CREATING A FUNCTION THAT TAKES IN 3 PARAMETERS
function NavBar({ currentPage, handlePageChange, pages }) {
  // INITALIZING USE EFFECT TO TARGET SLIDE-OUT ID TO ALLOW FOR MEDIUM/SMALL SCREEN DISPLAYS TO HAVE A POP OUT SIDENAV
  useEffect(() => {
    const leftNav = document.querySelector("#slide-out");
    M.Sidenav.init(leftNav, {});
  }, []);

  // RENDERING HTML PAGE LAYOUT FOR PORTFOLIO PAGE
  return (
    <nav style={styles.navbar}>
      <div className="nav-wrapper grey darken-2">
        <a href="/About" className="brand-logo left">
          Chris' Portfolio
        </a>
        <a href="/" data-target="slide-out" className="sidenav-trigger right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {pages.map((page) => (
            <li key={page} className="nav-item">
              <a
                href={`#${page.toLowerCase()}`}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? "nav-link" : "nav-link"}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul id="slide-out" className="sidenav">
        {pages.map((page) => (
          <li key={page} className="nav-item">
            <a
              href={`#${page.toLowerCase()}`}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "nav-link" : "nav-link"}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
