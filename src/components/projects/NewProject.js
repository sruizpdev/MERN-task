import React, { useState } from "react";
const NewProject = () => {
  const [project, saveProject] = useState({
    name: "",
  });
  const { name } = project;

  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitProject = e =>{
      e.preventDefault();

  }
  return (
    <>
      <button type="button" className="btn btn-block btn-primary">
        New project
      </button>
      <form className="form-new-project" onSubmit={onSubmitProject}>
        <input
          type="text"
          className="input-text"
          placeholder="New project"
          name="name"
          value={name}
          onChange={onChangeProject}
        />
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Add project"
        />
      </form>
    </>
  );
};

export default NewProject;
