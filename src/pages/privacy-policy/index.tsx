import React from "react";
import { Container, Title, Subtitle, Text, List, ListItem } from "./style";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Subtitle>Last updated: March 05, 2025</Subtitle>
      <Text>
        We value your privacy and are committed to ensuring transparency in how our services operate. This Privacy Policy outlines how we handle information when you use our Service.
      </Text>
      
      <Title>Data Collection and Usage</Title>
      <Text>
        We do not collect, store, or process any personal data from our users. Our Service is designed to operate without requiring any personally identifiable information (PII) from you. We do not use tracking cookies, analytics, or third-party data collection tools.
      </Text>
      
      <Subtitle>Anonymous Usage</Subtitle>
      <Text>
        You can use our Service without providing any personal details. We do not track, store, or analyze user activity beyond what is necessary for core service functionality. No browsing history, IP addresses, or device information is collected.
      </Text>
      
      <Title>Security</Title>
      <Text>
        While we do not collect personal data, we implement standard security measures to ensure the integrity and reliability of our Service. Our servers are protected against unauthorized access, and we continuously monitor for vulnerabilities to ensure a secure experience.
      </Text>
      
      <Title>Third-Party Links</Title>
      <Text>
        Our Service may contain links to third-party websites for additional resources or references. However, we do not control or take responsibility for their content, policies, or practices. We encourage you to review their privacy policies before interacting with their services.
      </Text>
      
      <Title>Changes to This Policy</Title>
      <Text>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any modifications will be posted on this page, and we encourage users to review this policy periodically for updates.
      </Text>
      
      <Title>Contact Us</Title>
      <Text>
        If you have any questions about this Privacy Policy or require further information, you can contact us at:
      </Text>
      <List>
        <ListItem>Email: duncankariuki60@gmail.com</ListItem>
      </List>
    </Container>
  );
};

export default PrivacyPolicy;
