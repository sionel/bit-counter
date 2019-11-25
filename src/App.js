import React from "react";
import "reset-css";
import styled from "styled-components";

const Root = styled.div`
  height: 100vh;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
`;

const NumberBoard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const NumberSpan = styled.span`
  display: flex;
  flex: 1;
  font-size: 100px;
  font-weight: 600;
  color: olive;
  align-items: center;
  justify-content: center;
`;

const InputBoard = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  flex: 0.5;
  font-size: 30px;
  text-align: right;
`;

const ButtonBoard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CircleButton = styled.button`
  color: white;
  background-color: ${props => (props.disabled ? "darkgray" : "gray")};
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  border: 0px;
  outline: none;
  margin-left: 10px;
  font-size: 25px;

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.5)};
  }

  &:first-child {
    margin: 0;
  }
`;

const App = () => (
  <Root>
    <NumberBoard>
      <NumberSpan>0</NumberSpan>
    </NumberBoard>
    <InputBoard>
      <Input />
    </InputBoard>
    <ButtonBoard>
      <CircleButton>Undo</CircleButton>
      <CircleButton>+</CircleButton>
      <CircleButton>-</CircleButton>
      <CircleButton>Redo</CircleButton>
    </ButtonBoard>
  </Root>
);

export default App;
