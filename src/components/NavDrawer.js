import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -241px;
  width: 200px;
  height: 100vh;
  padding: 1em;
  background-color: white;
  z-index: 5;
  transition: all 1s ease-in-out;
  border-left: 1px solid #c8c7c4;
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
  top: 100px;
  left: 0;
  right: 0;
  z-index: 1;
`;
const ListItem = styled.li`
  margin-bottom: 18px;
  width: 100%;
  display: block;
`;
export const NavDrawer = () => {
  return (
    <Wrapper>
      <Container>
        <ul>
          <li />
        </ul>
      </Container>
    </Wrapper>
  );
};
