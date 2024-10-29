import React, { useEffect, useState } from "react";
import "./BoxAddProfile.css";
import TasksTittle from "../TasksTittle";

export default function BoxAddProfile(props) {
  const [boxProfileName, setBoxProfileName] = useState("");

  function handleConfirmProfileName() {
    if (boxProfileName.length == "") {
      document.querySelector(".alert-add-profile").style.opacity = "1";
    } else {
      document.querySelector(".alert-add-profile").style.opacity = "0";
      props.functionSetProfileName(boxProfileName);
      document.querySelector(".container-box-add-profile").style.display =
        "none";
    }
  }

  useEffect(() => {
    if (props.profileName === null) {
      document.querySelector(".container-box-add-profile").style.display =
        "flex";
    } else {
      document.querySelector(".container-box-add-profile").style.display =
        "none";
    }
  }, [props.profileName]);

  function handleClickEnter(e) {
    if (e.key === 'Enter') {
      handleConfirmProfileName();
    }
  }

  return (
    <div className="container-box-add-profile">
      <div className="box-add-profile">
        <TasksTittle tittle="Adicionar usuário" />
        <input
          type="text"
          value={boxProfileName}
          onChange={(e) => setBoxProfileName(e.target.value)}
          onKeyDown={(e) => handleClickEnter(e)}
        />
        <span className="alert-add-profile">
          O campo precisa ser preenchido
        </span>
        <a className="button-confirm" onClick={handleConfirmProfileName}>
          Confirmar
        </a>
      </div>
    </div>
  );
}
