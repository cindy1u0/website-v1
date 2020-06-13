import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CameraIcon from '@material-ui/icons/Camera';
import EmailIcon from '@material-ui/icons/Email';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const NextPageIconContainer = styled.div`
  bottom: 0;
  text-align: center;
  padding-top: 100px;
  width: 100%;

  svg {
    color: #303C6C;
    height: 50px;
    padding-bottom: 10px;
    width: 40px;

    :hover {
      cursor: pointer;
      transform: translate(0px, -10px);
      transition: transform 0.2s ease;
    }
  }
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  padding: 0 15px 15px;
`;

const StyledGithub = styled(GitHubIcon)`
  padding: 0 15px 15px;
`;

const StyledEmail = styled(EmailIcon)`
  padding: 0 15px 15px;
`;

const StyledCamera = styled(CameraIcon)`
  padding: 0 15px 15px;
`;


const Footer = () => {
  return (
    <NextPageIconContainer>
      <StyledGithub 
        onClick={() => window.open('https://github.com/cindy1u0', '_blank')}  
      />
      <StyledLinkedIn 
        onClick={() => window.open('https://www.linkedin.com/in/cindy1u0/', '_blank')}  
      />
      <PersonOutlineIcon
        onClick={() => window.open('https://drive.google.com/file/d/1jY3D1uArqNDAxk2W4oGz_0KefKu4q4VI/view?usp=sharing/', '_blank')}  
      />
      <a href="mailto:luo.xiny@northeastern.edu">
      <StyledEmail/>
      </a>
      <StyledCamera 
        onClick={() => window.open('https://www.flickr.com/people/183832002@N04/', '_blank')} 
      />
    </NextPageIconContainer>
  )
}

export default Footer;