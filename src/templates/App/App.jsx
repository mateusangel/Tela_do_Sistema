import { LoginCardd } from "../../../components/LoginCadastro/LoginCard";
import GlobalStyled from "../../../styles/GlobalStyled";
import { H1 } from "../../../components/LoginCadastro/H1";
import Input from "../../../components/LoginCadastro/Input";
import { Div } from "../../../styles/DivLogin/Div";
import { P } from "../../../components/LoginCadastro/P";
import { Btn } from "../../../components/LoginCadastro/Btn";
import { DivBtn } from "../../../components/LoginCadastro/DivBtn";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { Form } from "../../../components/FormCadastro/Form";
import { BtnSendd } from "../../../components/LoginCadastro/BtnSend";
import { Kalogo } from "../../../components/Logo/Logo";

function App() {
  const { state } = useContext(Context);

  return (
    <>
      <GlobalStyled />
      <LoginCardd>
        <Kalogo />
        <Div>
          <H1>STUDIO K&A</H1>
          <Form>
            <P>E-mail:</P>
            <Input
              type={state.typeEmail}
              placeholder={state.typeEnterYourName}
            />
            <P>Senha:</P>
            <Input
              type={state.typePassord}
              placeholder={state.typeEnterYourPassoword}
            />
            <DivBtn>
              <BtnSendd>Entrar</BtnSendd>
              <Btn rota={"/Cadastro"}>Cadastrar</Btn>
            </DivBtn>
          </Form>
        </Div>
      </LoginCardd>
    </>
  );
}

export default App;
