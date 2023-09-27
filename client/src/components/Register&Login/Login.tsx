import React from "react";
import { useCurrentUser } from "../../CurrentUserContext"
import Axios from "axios";
import {
  RegisterInput,
  LoginRegisterSubmit,
  LoginWrapper,
  ErrorMessage,
} from "./index.css";

import { useState, useRef } from "react";

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const userContext: any = useCurrentUser();
  const [usernameLog, setUsernameLog] = useState<string>("");
  const [passwordLog, setPasswordLog] = useState<string>("");

  const navigate = useNavigate()

  const LoginMessage = useRef<any>();
  const validateInputs = () => {
    if ([usernameLog, passwordLog].some((input) => !input)) {
      LoginMessage.current.innerHTML = "Toate campurile trebuie completate.";
      return;
    }
    LoginMessage.current.innerHTML = "";
    loginUser();
  };

  const loginUser = async () => {
    try{
      const response = await Axios.post("/api/loginUser", {
        Username: usernameLog,
        Password: passwordLog,
      })
      if (response.data?.success) {
        LoginMessage.current.innerHTML = "Felicitari! V-ati logat cu succes.";
        setUsernameLog("");
        setPasswordLog("");
        userContext.fetchCurrentUser();
        navigate("/");
      }
      else LoginMessage.current.innerHTML = "Logare esuata";
    }catch(_){
      LoginMessage.current.innerHTML = "Logare esuata";
    }
  };

  return (
    <>
      {userContext.isLoggedIn ? <h3>Sunteti deja logat</h3> :
        <LoginWrapper>
          <RegisterInput
            type="text"
            placeholder="Username"
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsernameLog(e.target.value)}
            value={usernameLog}
          />
          <RegisterInput
            type="password"
            placeholder="Parola"
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPasswordLog(e.target.value)}
            value={passwordLog}
          />
          <ErrorMessage ref={LoginMessage}></ErrorMessage>
          <LoginRegisterSubmit onClick={() => validateInputs()}>
            LOGIN
          </LoginRegisterSubmit>
          <span onClick={() => navigate("/register")}>Deschide cont</span>
        </LoginWrapper>
      }
    </>
  );
};
export default Login;