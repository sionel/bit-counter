import React, { useState } from "react";
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


const App = () => {
  const [inputValue, input] = useState("")
  const [outputValue, output] = useState(0)
  const [undoList, undo] = useState([])
  const [redoList, redo] = useState([])

  const undoClick = () => {
    if (undoList.length !== 0) {
      const val = undoList.pop();
      redoList.push(outputValue);
      output(val);
    }
    else return;
  }

  const plusClick = () => {
    if(inputValue === "") return
    undoList.push(outputValue)
    output(Number(outputValue + inputValue))
    input("")
    redo([])
  }

  const minusClick = () => {
    if(inputValue === "") return
    undoList.push(outputValue)
    output(Number(outputValue - inputValue))
    input("")
    redo([])
  }

  const redoClick = () => {
    if (redoList.length !== 0) {
      const val = redoList.pop();
      undoList.push(outputValue);
      output(val);
    }
    else return
  }
  const resetCilck = () => {
    redo([])
    undo([])
    output(0)
    input("")
  }

  const inputNum = (e) => {
    if (e.target.value === "") {
      input("")
      return;
    }
    console.log(e.target.value);
    
    if (e.target.value.slice(-1) === "+") {
      if(e.target.value.slice(0,e.target.value.length-1) === 0) return
      plusClick();
      return;
    } else if (e.target.value.slice(-1) === "-") {
      if(e.target.value.slice(0,e.target.value.length-1) === 0) return
      minusClick();
      return;
    }

    let num = Number(e.target.value);
    
    if (!isNaN(num)) {
      input(num);
    }
    else {
      input("");
      alert("only number")
    }
  }

  return (
    <Root>
      <NumberBoard>
        <NumberSpan>{outputValue}</NumberSpan>
      </NumberBoard>
      <InputBoard>
        <Input value={inputValue} onChange={inputNum} />
      </InputBoard>
      <ButtonBoard>
        <CircleButton onClick={undoClick} disabled={undoList.length===0?true:false}>Undo</CircleButton>
        <CircleButton onClick={plusClick} disabled={inputValue===""?true:false}>+</CircleButton>
        <CircleButton onClick={minusClick} disabled={inputValue===""?true:false}>-</CircleButton>
        <CircleButton onClick={redoClick} disabled={redoList.length===0?true:false}>Redo</CircleButton>
        <CircleButton onClick={resetCilck} >Reset</CircleButton>
      </ButtonBoard>
    </Root>
  );
}

export default App;