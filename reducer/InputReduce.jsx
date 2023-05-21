import { Types } from "../Context/Typess/types";
export const InputReduce = (state, action) => {
  switch (action.type) {
    case Types.enableTrue:
      return {
        ...state,
        typePassord: "password",
      };
    case Types.enableFalse:
      return {
        ...state,
        typePassord: "numbe",
      };
    case Types.enableTrue1:
      return {
        ...state,
        typePassord1: "password",
      };
    case Types.enableFalse1:
      return {
        ...state,
        typePassord1: "numbe",
      };
  }
  return { ...state };
};
