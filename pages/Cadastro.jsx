import { Btn } from "../components/LoginCadastro/Btn";
import { DivBtn } from "../components/LoginCadastro/DivBtn";
import { H1 } from "../components/LoginCadastro/H1";
import { Input } from "../components/LoginCadastro/Input";
import { LoginCardd } from "../components/LoginCadastro/LoginCard";
import { P } from "../components/LoginCadastro/P";
import GlobalStyled from "../styles/GlobalStyled";
import Logo from "../src/assets/Vector.png";
import { DivStyled } from "../styles/DivCadastro/DivStyled";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { Eye } from "../components/eyen/Eye";
import { handlClick1 } from "../func/HandleClick";
import { FiEyeOff } from "react-icons/fi";
import { Types } from "../Context/Typess/types";
import { Form } from "../components/FormCadastro/Form";
import { Chamada } from "../services/Chamada";

const Api = new Chamada();

export function Cadastro() {
  const { state, dispatch } = useContext(Context);
  const [enter, setenter] = useState([]);

  useEffect(() => {
    return () => {
      Types.enableTrueAndFalse1 = false;
      console.log(Types.enableTrueAndFalse1);
      state.typePassord1 = "password";
    };
  }, [Types.enableTrueAndFalse1]);

  const handlechange = (e) => {
    setenter({
      ...enter,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const { result } = await Api.Cadastro(enter);

      console.log(result);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <GlobalStyled />
      <LoginCardd>
        <img src={Logo} alt="logo  da aplicação" />
        <DivStyled>
          <H1>Cadastro</H1>
          <Form onSubmit={handlesubmit}>
            <P>Nome:</P>
            <Input
              type={state.typeYourName}
              placeholder={state.typeEnterYourName}
              name={"useradm"}
              onChange={handlechange}
            />
            <P>E-mail:</P>
            <Input
              type={state.typeEmail}
              placeholder={state.typeEnterYourEmail}
              name={"emailadm"}
              onChange={handlechange}
            />
            <P>Senha:</P>
            <Input
              type={state.typePassord1}
              placeholder={state.typeEnterYourPassoword}
              name={"passowordadm"}
              onChange={handlechange}
            />
            {Types.enableTrueAndFalse1 ? (
              <FiEyeOff
                onClick={() => handlClick1({ dispatch })}
                className={"eye1"}
              />
            ) : (
              <Eye
                onClick={() => handlClick1({ dispatch })}
                className={"eye1"}
              />
            )}
            <P>Repita sua Senha:</P>
            <Input
              type={state.typePassord1}
              placeholder={state.typeRepeatYourPassword}
              name={"passowordadmrepet"}
              onChange={handlechange}
            />
            <DivBtn>
              <Btn rota={"/Cadastro"}> Salvar</Btn>
              <Btn rota={"/"}>Voltar</Btn>
            </DivBtn>
          </Form>
        </DivStyled>
      </LoginCardd>
    </>
  );
}
