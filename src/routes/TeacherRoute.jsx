import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../teacher/pages/dashboard/Dashboard";
import Class from "../teacher/pages/class/Class";

const TeacherRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/class" element={<Class />}></Route>
    </Routes>
  );
};

export default TeacherRoute;
