import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';

const DrawerContainer = styled.div`
  height: 100%;
`;

const NavContainer = styled.div`
  background: #F76C6C;
  height: 250px;
  text-align: center;

  p {
    color: #FFF;
    font-family: Georgia;
    font-size: 25px;
    font-weight: 600;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const OpenMenu = ({
  openDrawer,
  setClose,
}) => {
  return (
    <DrawerContainer>
      <Drawer open={openDrawer} anchor='top' onClose={setClose}>
        <NavContainer>
          <p>About</p>
          <p>Experience</p>
          <p>Projects</p>
          <p>Photography</p>
        </NavContainer>
      </Drawer>
    </DrawerContainer>
  )
}

export default OpenMenu;