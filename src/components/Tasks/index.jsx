import React, { useEffect, useState } from "react";
import "./Tasks.css";
import imageTrash from "./trash-image.png";
import TasksTittle from "../TasksTittle";

export default function Tasks(props) {
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    const tasksList = props.tasksList;
    for (let i = 0; i < tasksList.length; i++) {
      if (tasksList[i].checked === false) {
        setIsChecked(false);
        break;
      } else {
        setIsChecked(true);
      }
    }

    if (tasksList.length === 0) {
      setIsChecked(true);
    }
  }, [props.tasksList]);

  return (
    <div className="tasks">
      <TasksTittle tittle={"Lista de tarefas"} />
      <ul className="tasks-list">
        {props.tasksList.map(
          (task) =>
            !task.checked && (
              <li key={task.id} data-key={task.id}>
                <input
                  type="checkbox"
                  readOnly
                  onChange={props.handleInputChange}
                />
                <p>{task.task}</p>
                <div className="trash-image" onClick={() => props.deleteTask(task.id)}>
                  <img src={imageTrash} alt="Lixeira" />
                </div>
              </li>
            )
        )}
        {isChecked && (
          <li>
            <p>Nenhuma tarefa pendente</p>
          </li>
        )}
      </ul>
    </div>
  );
}
