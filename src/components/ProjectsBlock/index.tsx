import { Row, Col, Tooltip } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  ContentWrapper,
  Title,
  Description,
  TechBadge,
  TechWrapper,
  GitHubLink,
  ButtonWrapper,
  ModulesWrapper,
  SectionWrapper,
  GithubRepoWrapper, RepoMain, RepoModules, ModuleItem,
} from "./styles";
import ImageCarousel from "../../common/Carousel/image-carousel";
import { SvgIcon } from "../../common/SvgIcon";

const ProjectsBlock = ({
  images,
  title,
  content,
  github_url,
  modules,
  technologies,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContentSection id={id}>
      <Fade direction={direction} triggerOnce>
        <Row
          gutter={[32, 32]}
          align="middle"
          justify="center"
          style={{ flexDirection: direction === "left" ? "row" : "row-reverse" }}
        >
          {/* Image */}
          <Col lg={11} md={24} sm={24} xs={24}>
            <ImageCarousel images={images} />
          </Col>

          {/* Content */}
          <Col lg={11} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Title>{t(title)}</Title>
              <Description>{t(content)}</Description>

              {/* Tech Stack */}
              {technologies && technologies.length > 0 && (
                <Col>
                  <Description>Technologies:</Description>
                  <TechWrapper>
                    {technologies.map((tech, index) => (
                      <Tooltip title={tech.name} key={index}>
                        <TechBadge>
                          <SvgIcon src={tech.icon} width="90%" height="60%" />
                        </TechBadge>
                      </Tooltip>
                    ))}
                  </TechWrapper>
                </Col>
              )}


              {/* GitHub Links */}
              <GithubRepoWrapper>
                {modules && modules.length > 0 && (
                  <RepoModules>
                    {modules.map((mod, idx) => (
                      <ModuleItem key={idx}>
                        <a href={mod.github_url} target="_blank" rel="noopener noreferrer">
                          📦 {mod.title}
                        </a>
                      </ModuleItem>
                    ))}
                  </RepoModules>
                )}
              </GithubRepoWrapper>


              {/* Additional Sections (Optional) */}
              {section && (
                <SectionWrapper>
                  {section.map((item, idx) => (
                    <div key={idx}>
                      <h4>{t(item.title)}</h4>
                      <p>{t(item.content)}</p>
                    </div>
                  ))}
                </SectionWrapper>
              )}

              {/* Call to Action Buttons */}
              {button && (
                <ButtonWrapper>
                  {button.map((item, idx) => (
                    <Button key={idx} color={item.color} onClick={() => scrollTo("contact")}>
                      {t(item.title)}
                    </Button>
                  ))}
                </ButtonWrapper>
              )}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ProjectsBlock);
