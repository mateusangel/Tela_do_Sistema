import { useReducer } from "react";
import { Context } from "../Context";
import { InputReduce } from "../../reducer/InputReduce";
import { InputAction } from "../InputAction/InputAction";

// eslint-disable-next-line react/prop-types
export const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InputReduce, InputAction);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
