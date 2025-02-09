import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { FullScreenContainer } from "./styles";

import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProjectContent from "../../content/ProjectContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <ScrollToTop />
      <FullScreenContainer>
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />
      </FullScreenContainer>
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <div>
        <Fade direction={"left"} triggerOnce>
          <h3 id={`projects`}>{t(ProjectContent.title)}</h3>
        </Fade>
        {ProjectContent.data.map((project, index) => (
          <ContentBlock
            key={index}
            direction={index % 2 === 0 ? "right" : "left"}
            title={(project.project_name)}
            content={(project.description)}
            github_url={(project.github_url)}
            modules={(project.modules)}
            icon={(project.icon)}
            id={`projects-${index}`}
          />
        ))}
      </div>

      <Contact
        title={ContactContent.title}
        email={ContactContent.email}
        mobile={ContactContent.mobile}
        icon={ContactContent.icon}
        id="contact"
      />
    </Container>
  );
};

export default Home;
