import React from 'react';
import './ButtonAddTask.css';

export default function ButtonAddTask() {
  function handleAddTask() {
    const boxAddTask = document.querySelector('.container-box-add-task');
    boxAddTask.style.display = 'flex';
  }
  return (
    <div className='add-task' onClick={handleAddTask}>+</div>
  )
}
