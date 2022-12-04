import React from 'react';
import styled from 'styled-components';

import Headshot from '../pictures/headshot.png';
import CodeIcon from '@material-ui/icons/Code';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  background: #BAE9EB;
  height: 100vh;
  
  @media (max-width: 900px) {
    height: 100%;
  }

  @media (max-height: 580px) {
    height: 100%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: unset;
  }
`;

const LeftSide = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    align-items: unset;
    padding-left: 10px;
  }

  h1 {
    color: #303C6C;
    font-family: Georgia;
    font-size: 80px;
    margin: 10px 0 15px 0;

    @media (max-width: 500px) {
      font-size: 15vw;
    }
  }

  h3 {
    color: #303C6C;
    font-family: Georgia;
    font-size: 25px;
    margin: 100px 0 0 0;
    margin-bottom: 0;

    @media (max-width: 500px) {
      font-size: 5vw;
    }
  }
  
  p {
    color: #303C6C;
    font-family: Georgia;
    font-size: 35px;
    margin: 30px 0 0 0;

    @media (max-width: 500px) {
      font-size: 7vw;
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  display: flex;

  svg {
    color: #303C6C;

    @media (max-width: 500px) {
      font-size: 7vw;
    }
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  border-radius: 50%;
  height: 400px;
  margin-top: 100px;

  @media (max-width: 500px) {
    width: 60vw;
    height: 60vw
  }
`;

const StyledCodeIcon = styled(CodeIcon)`
  margin: 32px 10px 0 0;
`;

const StyledPhotoCameraIcon = styled(PhotoCameraIcon)`
  margin: 32px 10px 0 0;
`;

const StyledMusicNoteIcon = styled(MusicNoteIcon)`
  margin: 32px 10px 0 0;
`;

const Home = ({
  location
}) => {
  return (
    <Wrapper id='home'>
      <Layout>
        <LeftSide>
          <h3>Hello! My name is</h3>
          <h1>Cindy Luo.</h1>
          <Icon>
            <StyledCodeIcon fontSize="large" color="secondary"/>
            <p>Developer</p>
          </Icon>
          <Icon>
            <StyledPhotoCameraIcon fontSize="large" color="secondary"/>
            <p>Photographer</p>
          </Icon>
          <Icon>
            <StyledMusicNoteIcon fontSize="large" color="secondary"/>
            <p>Singer</p>
          </Icon>
        </LeftSide>
        <RightSide>
          <ImageWrapper src={Headshot}/>
        </RightSide>
      </Layout>
      <Footer />
    </Wrapper>
  );
}

export default Home;
