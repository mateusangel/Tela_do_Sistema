import styled from "styled-components";

export const Div = styled.div`
  flex-direction: column;
  justify-content: space-around;
  display: flex;

  margin-bottom: 10rem;

  h1 {
    text-align: center;
    margin-top: 7rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  input {
    height: 4rem;
    outline: none;
    border: none;
    border-radius: 10px;
    padding-left: 1rem;
    background-color: #f6d2d9;
    /* max-width: max-content;
    box-sizing: border-box; */
    width: 30rem;
    margin-bottom: 2rem;
  }
`;
