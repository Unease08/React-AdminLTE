import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function TeacherContainer({ children }) {
  return (
    <>
      <div className="user-container">
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default TeacherContainer;
