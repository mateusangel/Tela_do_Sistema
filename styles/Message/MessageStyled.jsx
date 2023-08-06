import styled, { keyframes } from "styled-components";

const animar = keyframes`
from{

transform: translateX(0);
opacity: 0;

}

to {
  transform: translateX(50px);
  opacity: 1;
 
}



`;

export const MessageStyled = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 70px;
  position: absolute;
  left: 0;
  top: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.back};

  animation-name: ${animar};
  animation-duration: 2s;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;
