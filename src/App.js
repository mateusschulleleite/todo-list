import { useEffect, useState } from "react";
import "./App.css";
import BoxAddTask from "./components/BoxAddTask";
import ButtonAddTask from "./components/ButtonAddTask";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import TasksCompleted from "./components/TasksCompleted";

export default function App() {
  const [tasksList, setTasksList] = useState(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    return localTasks || [];
  });

  function addTask(newTask) {
    setTasksList((prevTasks) => [...prevTasks, newTask]);
  }

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localTasks) {
      setTasksList(localTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  function handleInputChange(e) {
    const newList = [];
    const dataKey = e.target.parentNode.dataset.key;
    for (let i = 0; i < tasksList.length; i++) {
      if (tasksList[i].id == dataKey) {
        tasksList[i].checked = true;
        newList.push(tasksList[i]);
      } else {
        newList.push(tasksList[i]);
      }
    }
    setTasksList(newList);
  }

  function deleteTask(id) {
    const newList = [];
    for (let i = 0; i < tasksList.length; i++) {
      if (tasksList[i].id != id) {
        newList.push(tasksList[i]);
      }
    }
    setTasksList(newList);
  }

  return (
    <div className="app">
      <div className="circle"></div>
      <Profile tasksList={tasksList} />
      <ButtonAddTask />
      <Tasks
        tasksList={tasksList}
        handleInputChange={handleInputChange}
        deleteTask={deleteTask}
      />
      <TasksCompleted tasksList={tasksList} deleteTask={deleteTask} />
      <BoxAddTask addTask={addTask} />
    </div>
  );
}
