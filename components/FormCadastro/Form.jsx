// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
export const Form = ({ children, onSubmit, Ref }) => {
  return (
    <form ref={Ref} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
