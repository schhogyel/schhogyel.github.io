import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const SiteTitle = styled.h1`
  color: #558c89;
  font-size: 1.7rem;
`;

const Header = props => (
  <nav
    className="flex items-center justify-between flex-wrap bg-indigo-dark p-6"
    style={{ opacity: 0.95, position: "fixed", zIndex: 2, width: "100%" }}
  >
    <div className="container mx-auto flex items-center flex-no-shrink mr-6">
      <Link className="hover:no-underline" to="/">
        <span className="font-semibold text-xl tracking-tight text-white ">
          {props.title}
        </span>
      </Link>
    </div>
  </nav>
);

export default Header;
