import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { LogoContainer } from "../Header/styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            style={{
              paddingTop: "3rem",
              textAlign: "center", // Center content on small screens
              flexDirection: "row",
            }}
          >
              <LogoContainer to="/" aria-label="homepage">
                <SvgIcon src="logo.svg" width="101px" height="64px" />
              </LogoContainer>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <SocialLink
                  href="https://github.com/Dun-Njuguna"
                  src="github.svg"
                />
                <SocialLink
                  href="https://x.com/njuguna__duncan"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/duncan-kariuki"
                  src="linkedin.svg"
                />
              </Row>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
