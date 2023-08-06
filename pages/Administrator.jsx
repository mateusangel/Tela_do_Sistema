import { PerfilAdm } from "../components/Administrator/PerfilAdm/PerfilAdm";
import { StyledHeader } from "../components/Administrator/StyledHeader/StyledHeader";
import { Kalogo } from "../components/Logo/Logo";
import { Aside } from "../components/Administrator/Aside/Aside";
import { Main } from "../components/Administrator/Main/Main";
import { Input } from "../components/Administrator/Input/Input";
import { Section } from "../components/Administrator/Section/Section";
import GlobalStyled from "../styles/GlobalStyled";
import { Client } from "../components/Administrator/Clientes/client";

export const Administrator = () => {
  return (
    <>
      <GlobalStyled />
      <StyledHeader>
        <Kalogo />
        <PerfilAdm />
      </StyledHeader>
      <Section>
        <Aside />
        <Main>
          <Input />
          <Client />
        </Main>
      </Section>
    </>
  );
};
