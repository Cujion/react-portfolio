import React from "react";

const styles = {
  navbar: {
    marginBottom: "30px",
  },
};

const sidenavSlideOut = () => {
  console.log("CLICKED");
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".slide-out");
    var instances = window.M.Sidenav.init(elems);
  });
};

function NavBar({ currentPage, handlePageChange, pages }) {
  return (
    <nav style={styles.navbar}>
      <div className="nav-wrapper grey darken-2">
        <a href="/About" className="brand-logo left">
          Chris' Portfolio
        </a>
        <a
          href="#"
          data-target="slide-out"
          onClick={sidenavSlideOut}
          className="sidenav-trigger right"
        >
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
