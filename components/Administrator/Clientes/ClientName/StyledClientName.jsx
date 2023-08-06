import styled from "styled-components";

export const StyledClientName = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 15px 15px;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    &:hover {
      background-color: #727272;
      color: white;
    }
  }
`;
