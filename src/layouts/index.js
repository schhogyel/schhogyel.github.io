import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
require("./prism-tommorow.css");

import "./index.css";
import { NavDrawer } from "../components/NavDrawer";

const SiteTitle = styled.h1`
  color: #558c89;
  font-size: 1.7rem;
`;
const Container = styled.div``;
const SideBarContainer = styled.div`
  flex: 1;
`;
const Content = styled.div``;
const FooterContainer = styled.div`
  display: flex;
  min-height: 200px;
`;

const Footer = () => <FooterContainer />;
const SideBar = () => <SideBarContainer />;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 92vw;
`;
class TemplateWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerOpen: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      hamburgerOpen: !this.state.hamburgerOpen
    });
  }
  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: "Emaho: Eat Sleep Meditate Repeat"
            },
            { name: "keywords", content: "personal, experiences" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
          ]}
        />
        <Header
          title={this.props.data.site.siteMetadata.title}
          clickHandler={this.clickHandler}
          hamburgerOpen={this.state.hamburgerOpen}
        />
        <NavDrawer hamburgerOpen={this.state.hamburgerOpen} />

        <Content>{this.props.children()}</Content>

        <Footer />
      </div>
    );
  }
}

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
