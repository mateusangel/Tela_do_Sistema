import { Types } from "../Context/Typess/types";

export const handlClick = ({ dispatch }) => {
  if (Types.enableTrueAndFalse) {
    dispatch({ type: Types.enableTrue });
    Types.enableTrueAndFalse = false;
  } else {
    dispatch({
      type: Types.enableFalse,
    });
    Types.enableTrueAndFalse = true;
  }
};

export const handlClick1 = ({ dispatch }) => {
  if (Types.enableTrueAndFalse1) {
    dispatch({ type: Types.enableTrue1 });
    Types.enableTrueAndFalse1 = false;
  } else {
    dispatch({
      type: Types.enableFalse1,
    });
    Types.enableTrueAndFalse1 = true;
  }
};
