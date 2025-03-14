import { styled } from "styled-components";
import { FC, ReactNode } from "react";

export const FullScreenContent = styled.div`
  width: 100%;
  min-height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Restrict max width for better layout */
  flex-grow: 1; /* Allow to grow but not shrink below min content */
`;

interface FullScreenContainerProps {
  id?: string;
  children: ReactNode;
}

export const FullScreenContainer: FC<FullScreenContainerProps> = ({ id, children }) => {
  return (
    <FullScreenContent id={id}>
      <ContentWrapper>{children}</ContentWrapper>
    </FullScreenContent>
  );
};
