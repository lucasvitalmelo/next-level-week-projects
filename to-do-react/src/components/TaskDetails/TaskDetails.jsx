import React from "react";
import { useParams, useHistory } from "react-router-dom"

import Button from "../Button/Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}> Voltar</Button>
      </div>
      <div className="task-datails-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          deleniti tenetur commodi aliquid soluta maiores.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;