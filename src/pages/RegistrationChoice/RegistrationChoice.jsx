import React from "react";
import { useNavigate } from "react-router";
import cl from "./RegistrationChoice.module.scss";

const RegistrationChoice = () => {
    const navigate=useNavigate();
  return (
    <div className={cl.registration}>
      <div className={cl.registration__content}>
        <button onClick={()=>navigate("/registrationSpec")}>Работник</button>
        <button onClick={()=>navigate("/registrationClient")}>Клиент</button>
      </div>
    </div>
  );
};

export default RegistrationChoice;
