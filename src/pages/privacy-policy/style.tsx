import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  color: #444;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
