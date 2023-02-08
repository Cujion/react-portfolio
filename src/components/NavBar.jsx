import React from "react";

const styles = {
  navbar: {
    marginBottom: "30px",
  },
};

function NavBar({ currentPage, handlePageChange, pages }) {
  return (
    <nav style={styles.navbar}>
      <div className="nav-wrapper grey darken-2">
        <a href="/" class="brand-logo left">
          Chris' Portfolio
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {pages.map((page) => (
            <li key={page} className="nav-item">
              <a
                href={`#${page.toLowerCase()}`}
                onClick={() => handlePageChange(page)}
                className={
                  currentPage === page ? "nav-link" : "nav-link"
                }
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
