import styled from "styled-components";
import { useEffect, useState } from "react";

const ProblemWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setCount((state) => state +1); // setCount(count + 1)을 해버리면 useEffect에 count를 해버릴 수 없게 된다. 그러므로 useState함수의 형태로 넣어줘야한다
  }, [isClick]);                   // (state) => state +1을 입력하여 해결한다 

  return (
    <ProblemWrapper>
      {count ? count : 0}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
