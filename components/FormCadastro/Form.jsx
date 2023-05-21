// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
export const Form = ({ children, action, method, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} action={action} method={method}>
      {children}
    </form>
  );
};
