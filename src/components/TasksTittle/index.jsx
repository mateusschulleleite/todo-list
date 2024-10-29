import React from 'react';
import './TasksTittle.css';

export default function TasksTittle(props) {
  return (
    <div className='tasks-tittle'>
        <h1>{props.tittle}</h1>
    </div>
  )
}
