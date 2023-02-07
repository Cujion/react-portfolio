import React from "react";

function NavBar({ currentPage, handlePageChange, pages }) {
  return (
    <nav>
        <div className="nav-wrapper grey darken-2">
        <a href="/" class="brand-logo left">Chris' Portfolio</a>
    <ul id="nav-mobile" className="right">
      {pages.map((page) => (
        <li key={page} className="nav-item">
          <a
            href={`#${page.toLowerCase()}`}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "nav-link active" : "nav-link"}
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
