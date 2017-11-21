import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

import "./index.css";

const SiteTitle = styled.h1`
  font-size: 1.2rem;
  color: #558c89;
`;
const Container = styled.div`
  margin-bottom: 1.45rem;
`;
const Header = () => (
  <Container>
    <div
      style={{
        padding: ".25rem 1.0875rem",
        backgroundColor: "#D9853B"
      }}
    />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <SiteTitle style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none"
          }}
        />
        SimpleMinded
      </SiteTitle>
    </div>
  </Container>
);

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "My Personal Blog" },
        { name: "keywords", content: "personal, experiences" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
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
