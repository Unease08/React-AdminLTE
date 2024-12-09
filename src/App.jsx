import React from "react";
import TeacherRoute from "./routes/TeacherRoute";
import AdminRoute from "./routes/AdminRoute";
import TeacherContainer from "./teacher/components/layout/TeacherContainer";
import AdminContainer from "./admin/components/layout/AdminContainer";

function App() {
  const role = "admin";
  return (
    <>
      {role === "admin" ? (
        <AdminContainer>
          <AdminRoute />
        </AdminContainer>
      ) : (
        <TeacherContainer>
          <TeacherRoute />
        </TeacherContainer>
      )}
    </>
  );
}

export default App;
