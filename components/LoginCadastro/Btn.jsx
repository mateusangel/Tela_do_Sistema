import { BtnStyled } from "../../styles/BtnCard/Btn";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Btn = ({ rota }) => {
  return (
    <BtnStyled>
      <Link to={rota}>Voltar</Link>
    </BtnStyled>
  );
};
