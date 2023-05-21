import styled from "styled-components";

export const LoginCard = styled.div`
  max-width: 144rem;
  width: 70rem;
  margin: 2rem auto;
  height: 50rem;
  left: 163px;
  border-radius: 30px;

  background-color: #efa7b5;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;
  margin-top: 5rem;

  img {
    max-width: 500rem;
    object-fit: contain;
    max-width: max-content;
  }

  .eye1 {
    position: absolute;
    margin-top: 1.4rem;
    margin-left: -4rem;
    cursor: pointer;
  }

  .eye2 {
    position: absolute;
    margin-top: 13rem;
    margin-left: 30rem;
    cursor: pointer;
  }

  .eye3 {
    position: absolute;
    margin-top: 31rem;
    margin-left: 30rem;
    cursor: pointer;
  }
`;
