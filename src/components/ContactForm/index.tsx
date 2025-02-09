import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { ContactContainer, IconStyle } from "./styles";
import { MinPara, MinTitle, ResponsiveIcon } from "../ContentBlock/styles";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Contact = ({ title, email, mobile, id, icon, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <MinTitle>{t(title)}</MinTitle>
            <Col lg={11} md={11} sm={12} xs={24}>
              <ResponsiveIcon
                src={icon.startsWith("http") ? icon : `/img/svg/${icon}`}
                alt="Contact Icon"
              />
            </Col>
          </Slide>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Col span={24} style={{ textAlign: "center" }}>
              <MinPara>
                <PhoneOutlined style={IconStyle} /> {t(mobile)}
              </MinPara>
              <MinPara>
                <MailOutlined style={IconStyle} /> {t(email)}
              </MinPara>
            </Col>
          </Slide>
        </Col>


      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
