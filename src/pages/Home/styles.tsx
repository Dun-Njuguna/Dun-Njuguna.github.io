import { styled } from "styled-components";

export const FullScreenContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px); /* Adjust for header */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Restrict max width for better layout */
  flex-grow: 1; /* Prevent shrinking */
`;

export const FullScreenContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullScreenContent>
      <ContentWrapper>{children}</ContentWrapper>
    </FullScreenContent>
  );
};
