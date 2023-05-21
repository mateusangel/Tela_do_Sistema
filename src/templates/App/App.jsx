import { LoginCardd } from "../../../components/LoginCadastro/LoginCard";
import GlobalStyled from "../../../styles/GlobalStyled";
import Logo from "../../assets/vector.png";
import { H1 } from "../../../components/LoginCadastro/H1";
import { Input } from "../../../components/LoginCadastro/Input";
import { Div } from "../../../styles/DivLogin/Div";
import { P } from "../../../components/LoginCadastro/P";
import { Btn } from "../../../components/LoginCadastro/Btn";
import { DivBtn } from "../../../components/LoginCadastro/DivBtn";
import { useContext, useEffect } from "react";
import { Context } from "../../../Context/Context";
import { Types } from "../../../Context/Typess/types";
import { Eye } from "../../../components/eyen/Eye";
import { handlClick } from "../../../func/HandleClick";
import { FiEyeOff } from "react-icons/fi";
import { Form } from "../../../components/FormCadastro/Form";

function App() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    return () => {
      Types.enableTrueAndFalse = false;
      console.log(Types.enableTrueAndFalse);
      state.typePassord = "password";
    };
  }, [Types.enableTrueAndFalse]);

  return (
    <>
      <GlobalStyled />
      <LoginCardd>
        <img src={Logo} alt="logo  da aplicação" />
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
            {Types.enableTrueAndFalse ? (
              <FiEyeOff
                onClick={() => handlClick({ dispatch })}
                className={"eye1"}
              />
            ) : (
              <Eye
                onClick={() => handlClick({ dispatch })}
                className={"eye1"}
              />
            )}
            <DivBtn>
              <Btn>Entrar</Btn>
              <Btn rota={"/Cadastro"}>Cadastrar</Btn>
            </DivBtn>
          </Form>
        </Div>
      </LoginCardd>
    </>
  );
}

export default App;
