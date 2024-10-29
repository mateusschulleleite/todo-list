import React from "react";
import "./TasksCompleted.css";
import imageTrash from "./trash-image.png";
import TasksTittle from "../TasksTittle";

export default function TasksCompleted(props) {
  return (
    <div className="tasks-completed">
      <TasksTittle tittle="Tarefas concluídas" />
      <ul className="tasks-list-completed">
        {props.tasksList.map(
          (task) =>
            task.checked && (
              <li key={task.id} data-key={task.id}>
                <p>{task.task}</p>
                <div className="trash-image" onClick={(e) => props.deleteTask(task.id)}>
                  <img src={imageTrash} alt="Lixeira" />
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
