import { StyledClientName } from "./StyledClientName";

export const ClientName = () => {
  return (
    <>
      <StyledClientName>
        <div>
          <h1>Nome:</h1>
          <label htmlFor="name">Sara</label>
        </div>
        <div>
          <h1>DATE:</h1>
          <label htmlFor="Data">11/07/23</label>
        </div>
        <div>
          <h1>Horario:</h1>
          <label htmlFor="Hors">09:10</label>
        </div>
        <div>
          <button>Detalhes</button>
        </div>
      </StyledClientName>
    </>
  );
};
