import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const SiteTitle = styled.h1`
  color: #558c89;
  font-size: 1.7rem;
`;

const Hamburger = styled.div`
  margin: 0px 12px -8px 5px;
  display: inline-block;
  width: 32px;
  height: 30px;
  position: relative;
  transform: rotate(0);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const HamburgerSpan = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: ${props => (props.two && props.open ? "0" : "100%")};
  background: #fff;
  border-radius: 0;
  opacity: ${props => (props.two && props.open ? "0" : "1")};
  left: ${props => (props.open && (props.one || props.three) ? "8px" : "0")};
  transform: ${props =>
    props.open && props.one
      ? "rotate(45deg)"
      : props.open && props.three ? "rotate(-45deg)" : "rotate(0)"};
  transition: 0.25s ease-in-out;
  transform-origin: left center;
  top: ${props => {
    if (props.one && open) {
      return "-1px";
    } else if (props.one) {
      return "0";
    } else if (props.three && open) {
      return "22px";
    } else if (props.two) {
      return "10px";
    } else {
      return "20px";
    }
  }};
`;

class Header extends React.Component {
  render() {
    return (
      <nav
        className="flex items-center flex-wrap bg-indigo-darker p-6"
        style={{
          opacity: 0.95,
          position: "fixed",
          zIndex: 1000,
          width: "100%"
        }}
      >
        <Hamburger onClick={this.props.clickHandler}>
          <HamburgerSpan one open={this.props.hamburgerOpen} />
          <HamburgerSpan two open={this.props.hamburgerOpen} />
          <HamburgerSpan three open={this.props.hamburgerOpen} />
        </Hamburger>
        <div className="flex items-start justify-start px-4">
          <Link className="hover:no-underline" to="/">
            <span className="font-semibold text-xl tracking-tight text-white ">
              {this.props.title}
            </span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
