import { AdmRegister } from "../../src/utils/AdmRegister";
import { ContextUserRegiter } from "../Context";

// eslint-disable-next-line react/prop-types
export const ContextUserRegiters = ({ children }) => {
  return (
    <ContextUserRegiter.Provider value={{ AdmRegister }}>
      {children}
    </ContextUserRegiter.Provider>
  );
};
