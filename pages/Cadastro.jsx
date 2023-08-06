import { Btn } from "../components/LoginCadastro/Btn";
import { DivBtn } from "../components/LoginCadastro/DivBtn";
import { H1 } from "../components/LoginCadastro/H1";
import Input from "../components/LoginCadastro/Input";
import { LoginCardd } from "../components/LoginCadastro/LoginCard";
import { P } from "../components/LoginCadastro/P";
import GlobalStyled from "../styles/GlobalStyled";
import { DivStyled } from "../styles/DivCadastro/DivStyled";
import { useContext, useState } from "react";
import { Context, ContextUserRegiter } from "../Context/Context";

import { Form } from "../components/FormCadastro/Form";
// import { Chamada } from "../services/Chamada";
import { BtnSendd } from "../components/LoginCadastro/BtnSend";
import { FlashMessage } from "../hooks/useFlashMessage";
import { TimeShowMessage } from "../hooks/Time";
import { Kalogo } from "../components/Logo/Logo";
import { navegacao } from "../func/navegacao";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
  // const Api = new Chamada();
  const { state } = useContext(Context);
  const { AdmRegister } = useContext(ContextUserRegiter);
  const [enter, setenter] = useState([]);
  const [msg, setmsg] = useState("");
  const [tipo, settipo] = useState(" ");
  const navi = useNavigate();
  // Custom Hook
  const [showMessage, start] = TimeShowMessage(false, 3000);

  const handlechange = (e) => {
    setenter({
      ...enter,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async (event) => {
    console.log(AdmRegister);
    event.preventDefault();
    try {
      const response = await AdmRegister(enter);
      console.log(response.token);
      setmsg(response.message);
      settipo("green");
      start();
      navegacao(navi);
      return response;
    } catch (err) {
      if (err.response.data.message) {
        setmsg(err.response.data.message);
        settipo("red");
        start();
        return;
      } else {
        setmsg(err.response.data.message);
        settipo("red");
        start();
        return;
      }
    }
  };

  return (
    <>
      {showMessage && <FlashMessage msg={msg} type={tipo} />}
      <GlobalStyled />
      <LoginCardd>
        <Kalogo />
        <DivStyled>
          <H1>Cadastro</H1>
          <Form onSubmit={handlesubmit}>
            <P>Nome:</P>
            <Input
              type={state.typeYourName}
              placeholder={state.typeEnterYourName}
              name={"name"}
              onChange={handlechange}
            />
            <P>E-mail:</P>
            <Input
              type={state.typeEmail}
              placeholder={state.typeEnterYourEmail}
              name={"email"}
              onChange={handlechange}
            />
            <P>Senha:</P>
            <Input
              type={state.typePassord1}
              placeholder={state.typeEnterYourPassoword}
              name={"password"}
              onChange={handlechange}
            />
            <P>Repita sua Senha:</P>
            <Input
              type={state.typePassord1}
              placeholder={state.typeRepeatYourPassword}
              name={"confirmpassword"}
              onChange={handlechange}
            />
            <DivBtn>
              <BtnSendd />
              <Btn rota={"/"} />
            </DivBtn>
          </Form>
        </DivStyled>
      </LoginCardd>
    </>
  );
}
