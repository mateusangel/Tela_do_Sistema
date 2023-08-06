import { MessageStyled } from "../styles/Message/MessageStyled";

// eslint-disable-next-line react/prop-types
export const FlashMessage = ({ msg, type }) => {
  return (
    <MessageStyled
      color={"white"}
      back={type === "red" ? "#ff000090;" : "green"}
    >
      {msg}
    </MessageStyled>
  );
};
