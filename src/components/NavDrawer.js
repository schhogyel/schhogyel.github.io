import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
const Wrapper = styled.div`
  position: fixed;
  top: 79px;
  left: ${props => (props.open ? "-1px" : "-241px")};
  width: 200px;
  height: 100vh;
  padding: 1em;
  background-color: white;
  z-index: 5;
  transition: all 0.3s ease-in-out;
  border-left: 1px solid #c8c7c4;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 10%;
  bottom: 0;
  right: 10%;
`;
const List = styled.ul`
  position: relative;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1;
  &:hover {
      2px soild #00a5ed;
  }
`;
const ListItem = styled.li`
  margin-bottom: 18px;
  width: 100%;
  display: block;
`;
export const NavDrawer = props => {
  return (
    <Wrapper open={props.hamburgerOpen}>
      <Container open={props.hamburgerOpen}>
        <List>
          <ListItem>
            <Link
              className="text-black hover:no-underline hover:border-b2"
              to="/"
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link className="text-black hover:no-underline" to="/">
              Contact
            </Link>
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  );
};
