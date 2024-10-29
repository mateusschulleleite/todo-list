import React, { useState } from "react";
import TasksTittle from "../TasksTittle";
import "./BoxAddTask.css";

export default function BoxAddTask(props) {
  const [inputText, setInputText] = useState("");

  function handleConfirmButton() {
    const taskId = Date.now();
    if (inputText.length > 0) {
      props.addTask({
        id: taskId,
        checked: false,
        task: inputText,
      });
      const boxAddTask = document.querySelector(".container-box-add-task");
      boxAddTask.style.display = "none";
      setInputText("");
      document.querySelector('.alert-add-task').style.opacity = 0;
    } else {
      document.querySelector('.alert-add-task').style.opacity = 1;
    }
  }

  function handleCloseButton() {
    const boxAddTask = document.querySelector(".container-box-add-task");
    boxAddTask.style.display = "none";
    document.querySelector('.alert-add-task').style.opacity = 0;
    setInputText("");
  }

  function handleConfirmKeyDown(e) {
    if (e.key === 'Enter') {
      handleConfirmButton();
    }
  }

  return (
    <div className="container-box-add-task">
      <div className="box-add-task">
        <TasksTittle tittle="Adicionar tarefa" />
        <input
          value={inputText}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleConfirmKeyDown(e)}
        />
        <span className="alert-add-task">O campo precisa ser preenchido</span>
        <a className="button-cancel" onClick={handleCloseButton}>
          X
        </a>
        <a className="button-confirm" onClick={handleConfirmButton}>
          Confirmar
        </a>
      </div>
    </div>
  );
}
