import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-scroll";

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
        <Link smooth={true} hashSpy={true} to='about'><p>About</p></Link>
        <Link smooth={true} hashSpy={true} to='experience'><p>Experience</p></Link>
        <Link smooth={true} hashSpy={true} to='projects'><p>Projects</p></Link>
				<Link smooth={true} hashSpy={true} to='photography'><p>Photography</p></Link>
        </NavContainer>
      </Drawer>
    </DrawerContainer>
  )
}

export default OpenMenu;