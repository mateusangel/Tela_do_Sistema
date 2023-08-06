/* eslint-disable react/jsx-no-undef */
import { StyledClient } from "./StyledClient";
import { ClientName } from "../Clientes/ClientName/ClientName";

// eslint-disable-next-line react/prop-types
export const Client = () => {
  return (
    <StyledClient>
      <ClientName />
      <ClientName />
    </StyledClient>
  );
};
