import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
require("prismjs/themes/prism-solarizedlight.css");

//import "./index.css";

const SiteTitle = styled.h1`
  color: #558c89;
  font-size: 1.7rem;
`;
const Container = styled.div``;
const SideBarContainer = styled.div`
  flex: 1;
  background-color: #558c89;
`;
const Content = styled.div`
  flex: 4;
  padding: 0 2.45rem;
`;
const FooterContainer = styled.div`
  display: flex;
  min-height: 200px;
`;
const Header = props => (
  <Container>
    <div
      style={{
        backgroundColor: "#D9853B"
      }}
    />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960
      }}
    >
      <SiteTitle style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none"
          }}
        />
        {props.title}
      </SiteTitle>
    </div>
  </Container>
);
const Footer = () => <FooterContainer />;
const SideBar = () => <SideBarContainer />;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
`;
const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "My Personal Blog" },
        { name: "keywords", content: "personal, experiences" }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <Wrapper>
      <SideBar />
      <Content>{children()}</Content>
    </Wrapper>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
