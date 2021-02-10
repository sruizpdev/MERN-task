import React from "react";
import Bar from "../layouts/Bar";
import Sidebar from "../layouts/Sidebar";
import FormTask from "../tasks/FormTask";



const Projects = () => {
  return (
    <div className="container-app">
      <Sidebar />

      <div className="main-section">
        <Bar/>
        <main>
          <FormTask/>
          <div className="container-tasks"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
