import { StyledSection } from "./StyledSection";

// eslint-disable-next-line react/prop-types
export const Section = ({ children }) => {
  return (
    <>
      <StyledSection>{children}</StyledSection>
    </>
  );
};
