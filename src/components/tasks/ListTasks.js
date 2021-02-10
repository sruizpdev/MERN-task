import React from "react";
import ListProjects from "../projects/ListProjects";
import Task from "./Task";

const ListTasks = () => {
  const tasksProject = [
    { name: "choose platform", status: true },
    { name: "choose SO", status: false },
    { name: "choose platform2", status: true },
    { name: "choose SO2", status: true },
    { name: "choose platform22", status: true },
  ];
  return (
    <>
      <h2>Project: Online shop</h2>
      <ul className="list-tasks">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>There are not tasks</p>
          </li>
        ) : (
          tasksProject.map((task) => <Task task={task} />)
        )}
      </ul>
    </>
  );
};

export default ListTasks;
