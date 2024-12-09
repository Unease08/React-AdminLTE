import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import Class from "../admin/pages/class/Class";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/class" element={<Class />}></Route>
    </Routes>
  );
};

export default AdminRoute;
