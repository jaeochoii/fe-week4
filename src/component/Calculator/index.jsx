import React, {useState} from "react";
import styled from "styled-components";

const CalculateCard = styled.div`
  height: 550px;
  width: 400px;
  border-style: solid;
  border-color: gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const ViewerCard = styled.input`
  height: 100px;
  width: 380px;
  border-style: solid;
  border-color: gray;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 40px;
  text-align: right;
  background-color: white;
`;

const NumberCard = styled.div`
  height: 380px;
  width: 380px;
  border-style: solid;
  border-color: gray;
  margin-top: 40px;
  margin-bottom: 30px;
  background-color: white;
`;

const NumberButton = styled.button`
  height: 90px;
  width: 95px;
  border-style: solid;
  font-size: 20px;
  background-color: white;
  border-color: gray;
  float: left;
  transition: 0.5s;
  text-align: center;
  &:hover {
    background-color: #E0FFFF;
    transition: 0.5s;
  }
`;

let input = "";

const Calculator = () => {
  const [value, setValue] = useState("");

  const onClickNumbers = (event) => {
    input = input + event.target.value;
    setValue(value + event.target.value);
  };

  const onClickOperators = (event) => {
    if (event.target.value === "@") {
      input = "";
      setValue("");
    } else {
      input = input + event.target.value;
      setValue("");
    }
  };

  const onClickEquals = () => {
    let number = "";
    let numbers = [];
    let operators = [];

    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        number = number + input[i];
      } else {
        numbers.push(number);
        number = "";
        operators.push(input[i]);
      }
    }
    numbers.push(number);
    number = "";

    let count = operators.length;
    let operator = "";
    let result;
    for (let i = 0; i < count; i++) {
      operator = operators.shift();
      if (operator === "/") {
        result = Number(numbers.shift()) / Number(numbers.shift());
      } else if (operator === "x") {
        result = Number(numbers.shift()) * Number(numbers.shift());
      } else if (operator === "-") {
        result = Number(numbers.shift()) - Number(numbers.shift());
      } else if (operator === "+") {
        result = Number(numbers.shift()) + Number(numbers.shift());
      }
      numbers.unshift(result);
    }
    setValue(Number(numbers[0]));
  };
    
  
    return (
      <CalculateCard>
      <ViewerCard   value={value} type="number" />
      <NumberCard>
        <NumberButton value={7} onClick={onClickNumbers}>7</NumberButton>
        <NumberButton value={8} onClick={onClickNumbers}>8</NumberButton>
        <NumberButton value={9} onClick={onClickNumbers}>9</NumberButton>
        <NumberButton value={"/"} onClick={onClickOperators}>/</NumberButton>
        <NumberButton value={4} onClick={onClickNumbers}>4</NumberButton>
        <NumberButton value={5} onClick={onClickNumbers}>5</NumberButton>
        <NumberButton value={6} onClick={onClickNumbers}>6</NumberButton>
        <NumberButton value={"x"} onClick={onClickOperators}>x</NumberButton>
        <NumberButton value={1} onClick={onClickNumbers}>1</NumberButton>
        <NumberButton value={2} onClick={onClickNumbers}>2</NumberButton>
        <NumberButton value={3} onClick={onClickNumbers}>3</NumberButton>
        <NumberButton value={"-"} onClick={onClickOperators}>-</NumberButton>
        <NumberButton value={"@"} onClick={onClickOperators}>@</NumberButton>
        <NumberButton value={0} onClick={onClickNumbers}>0</NumberButton>
        <NumberButton value={"+"} onClick={onClickOperators}>+</NumberButton>
        <NumberButton value={"="} onClick={onClickEquals}>=</NumberButton>
      </NumberCard>
      </CalculateCard>
    );
};


export default Calculator;