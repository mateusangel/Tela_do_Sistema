// eslint-disable-next-line react/prop-types
export function Input({ type, placeholder, name, value, onChange }) {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}
