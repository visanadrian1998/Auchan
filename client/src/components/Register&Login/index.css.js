import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding:20px 20px;
`;

export const RegisterInput = styled.input`
  display: block;
  height: 40px;
  font-size: 15px;
  color: #555555;
  border: 1px solid #e3e4e5;
  background-color: #f2f4f5;
  border-radius: 4px;
  padding: 6px 12px;
  width: 400px;
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
  outline: none;
`;
export const RegisterAddress = styled.textarea`
  display: block;
  font-size: 15px;
  color: #555555;
  border: 1px solid #e3e4e5;
  box-shadow: none;
  background-color: #f2f4f5;
  border-radius: 4px;
  padding: 6px 12px;
  width: 400px;
  font-family: "Roboto";
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
  resize: none;
  outline: none;
`;
export const LoginRegisterSubmit = styled.button`
  font-family: "SummitRegular-Inline";
  margin-bottom: 50px;
  margin-top: 30px;
  background-color: #afeeee;
  border: none;
  padding: 10px 50px;
  border-radius: 50px 0px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  width: 300px;
  height: 50px;
  :hover {
    background-color: black;
    color: #afeeee;
  }
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
`;
export const ErrorMessage = styled.p`
  font-family: "Roboto";
  margin: 0;
  font-weight: bold;
`;
