import { BtnStyled } from "../../styles/BtnCard/Btn";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Btn = ({ children, rota, submit }) => {
  return (
    <BtnStyled type={submit}>
      <Link to={rota}>{children}</Link>
    </BtnStyled>
  );
};
