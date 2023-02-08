// PULLING IN REQUIRED IMPORTS
import React, { useState } from "react";
import NavBar from "./NavBar";
import pageComponents from "./pages";

// ASSIGNING PAGES TO GRAB EACH PAGE COMPONENTS OBJECT BY THEIR KEY 
const pages = Object.keys(pageComponents);

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => pageComponents[currentPage]();
  const handlePageChange = (page) => setCurrentPage(page);

// RETURNING PAGE LAYOUT DEPENDING ON CURRENT PAGE SELECTED IN NAVBAR 
  return (
    <div>
      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pages={pages}
      />
      <Page />
    </div>
  );
}
