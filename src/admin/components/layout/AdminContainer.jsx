import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AdminContainer({ children }) {
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

export default AdminContainer;
