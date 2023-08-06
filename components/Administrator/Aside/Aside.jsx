import { Cadastrar } from "../Cadastrar/Cadastrar";
import { IcondeCadastro } from "../Cadastrar/IcondeCadastro";
import { StyledAside } from "./StyledAside";

export const Aside = () => {
  return (
    <>
      <StyledAside>
        <Cadastrar>
          Cadastrar <IcondeCadastro />
        </Cadastrar>
      </StyledAside>
    </>
  );
};
