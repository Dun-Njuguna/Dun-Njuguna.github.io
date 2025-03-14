import styled from "styled-components";

export const ContentSection = styled.section`
  padding: 4rem 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: #222;
`;

export const SubTitle = styled.h4`
  margin-bottom: 2rem;
  color: #222;
`;

export const Description = styled.p`
  line-height: 2;
  color: #555;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(243, 244, 246, 0.5);
  border-radius: 9999px; /* Fully rounded pill shape */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;
  cursor: default;

  &:hover {
    background: #e5e7eb;
  }

  svg, img {
    width: 20px;
    height: 20px;
  }
`;

export const TechTitle = styled.span`
  font-size: 0.875rem; /* Smaller text */
  color: #374151; /* Neutral gray for text */
  white-space: nowrap;
`;


export const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  background: #24292e;
  color: white;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #000;
  }
`;

export const ModulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    color: #0366d6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #023e8a;
    }
  }
`;

export const SectionWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #555;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const GithubRepoWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const RepoMain = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  background: #24292e;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #000;
  }
`;

export const RepoModules = styled.div`
  margin-left: 2rem; /* to indicate hierarchy under main repo */
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: #d1d5db;
  }
`;

export const ModuleItem = styled.div`
  a {
    padding: 0.5rem 1.2rem;
    border-radius: 30px;
    background: #f3f4f6;
    color: #0366d6;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #e5e7eb;
      color: #023e8a;
    }
  }
`;
