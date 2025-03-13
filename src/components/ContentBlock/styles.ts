import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
      line-height: 2;
  color: #555;
`;

interface StyledRowProps {
  direction?: "left" | "right";
}

export const StyledRow = styled(Row) <StyledRowProps>`
  flex-direction: ${({ direction }) => (direction === "left" ? "row" : "row-reverse")};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  margin-bottom: 0.5rem;
  color: #222;
`;

export const MinPara = styled("p")`
    line-height: 2;
  color: #555;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ResponsiveIcon = styled.img`
  width: 160%;
  height: 160%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;