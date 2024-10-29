import React, { useEffect, useState } from "react";
import "./Profile.css";
import IconeEditar from './icone-editar.png';
import profileMale from "./profile-male.png";
import BoxAddProfile from "../BoxAddProfile";

export default function Profile(props) {
  const [profileName, setProfileName] = useState();
  const [numberTasks, setNumberTasks] = useState(0);

  useEffect(() => {
    const tasksList = props.tasksList;
    let contador = 0;
    for(let i = 0; i < tasksList.length; i++) {
      if(tasksList[i].checked === false) {
        contador++;
      }
    }
    setNumberTasks(contador);
  }, [props.tasksList]);

  useEffect(() => {
    const storedProfileName = localStorage.getItem("tasksProfileName");
    setProfileName(storedProfileName);
  }, []);

  function functionSetProfileName(name) {
    setProfileName(name);
    localStorage.setItem("tasksProfileName", name);
  }

  function handleChangeProfileName() {
    const boxContainerAddProfile = document.querySelector('.container-box-add-profile');
    boxContainerAddProfile.style.display = 'flex';
  }

  return (
    <div className="profile">
      <BoxAddProfile
        functionSetProfileName={functionSetProfileName}
        profileName={profileName}
      />
      <div className="profile-text">
        <div className="profile-text-description">
          <p>Olá, {profileName}</p>
          <div onClick={handleChangeProfileName}>
            <img src={IconeEditar} alt="Icone de editar o nome" />
          </div>
        </div>
        <span>Hoje você tem {numberTasks} tarefa(s)</span>
      </div>
      <div className="profile-image">
        <img src={profileMale} alt="Icone de perfil" />
      </div>
    </div>
  );
}
