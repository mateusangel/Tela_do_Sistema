import { FiEyeOff } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export const Eye = ({ onClick, className }) => {
  return <FiEyeOff onClick={onClick} className={className} />;
};
