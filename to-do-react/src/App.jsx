import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Addtask/index";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import list from "./list.json"
import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState(list
  //   [
  //   {
  //     id: "1",
  //     title: "Estudar Programação",
  //     completed: false,
  //   },
  //   {
  //     id: "2",
  //     title: "Ler Livros",
  //     completed: true,
  //   },
  // ]
  );

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(list);
      setTasks(data);
    }
    fetchTasks();
  }, [])

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTask);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
