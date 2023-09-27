import React from "react";
import Axios from "axios";
import {
  RegisterInput,
  RegisterAddress,
  LoginRegisterSubmit,
  LoginWrapper,
  ErrorMessage,
} from "./index.css";

import { useState, useRef } from "react";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState<string>("");
  const [passwordReg, setPasswordReg] = useState<string>("");
  const [nameReg, setNameReg] = useState<string>("");
  const [adresaReg, setAdresaReg] = useState<string>("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState<string>("");

  const RegisterMessage = useRef<any>();
  const validateInputs = () => {
    if ([nameReg, usernameReg, adresaReg, passwordReg].some((input) => !input)) {
      RegisterMessage.current.innerHTML = "Toate campurile trebuie completate.";
      return;
    }
    if (passwordReg.length < 6) {
      RegisterMessage.current.innerHTML =
        "Parola trebuie sa contina cel putin 6 caractere";
      return;
    }
    if (passwordReg !== confirmPasswordReg) {
      RegisterMessage.current.innerHTML = "Parolele nu corespund";
      return;
    }
    RegisterMessage.current.innerHTML = "";
    registerUser();
  };

  const registerUser = async () => {
    const response = await Axios.post("/api/registerUser", {
      Username: usernameReg,
      Name: nameReg,
      Address: adresaReg,
      Password: passwordReg,
    })
    if (response.data?.success) {
      RegisterMessage.current.innerHTML = "Felicitari! Ati creat contul cu succes.";
      setNameReg("");
      setUsernameReg("");
      setAdresaReg("");
      setPasswordReg("");
      setConfirmPasswordReg("");
    }
    else RegisterMessage.current.innerHTML = "Inregistrare esuata";
  };

  return (
    <LoginWrapper>
      <RegisterInput
        type="text"
        placeholder="Username"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsernameReg(e.target.value)}
        value={usernameReg}
      />
      <RegisterInput
        type="text"
        placeholder="Nume si prenume"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNameReg(e.target.value)}
        value={nameReg}
      />
      <RegisterAddress
        rows={3}
        placeholder="Adresa"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAdresaReg(e.target.value)}
        value={adresaReg}
      />
      <RegisterInput
        type="password"
        placeholder="Parola"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPasswordReg(e.target.value)}
        value={passwordReg}
      />
      <RegisterInput
        type="password"
        placeholder="Confirmare Parola"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setConfirmPasswordReg(e.target.value)}
        value={confirmPasswordReg}
      />
      <ErrorMessage ref={RegisterMessage}></ErrorMessage>
      <LoginRegisterSubmit onClick={() => validateInputs()}>
        CREEAZA CONT
      </LoginRegisterSubmit>
    </LoginWrapper>
  );
};
export default Register;