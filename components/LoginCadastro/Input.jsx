import { memo } from "react";
// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, name, value, onChange, ref }) {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
}

export default memo(Input);
