import styled from "styled-components";

export const BtnStyled = styled.button`
  height: 5rem;
  width: 140px;
  border-radius: 10px;
  background-color: #f6d2d9;
  border: none;
  cursor: pointer;
  margin-top: 5rem;

  &:hover {
    background-color: #f6d2d9a2;

    font-size: 1.9rem;
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: black;

    width: 140px;
    height: 5rem;
    padding: 20px 45px 20px 45px;
    text-align: center;
  }
`;

export const BtnSend = styled.button`
  height: 5rem;
  width: 140px;
  border-radius: 10px;
  background-color: #f6d2d9;
  border: none;
  cursor: pointer;
  margin-top: 5rem;

  &:hover {
    background-color: #f6d2d9a2;

    font-size: 1.9rem;
    transition: 0.3s;
  }

  a {
    border: 1px solid black;
    text-decoration: none;
  }
`;
