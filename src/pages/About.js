import React from 'react';
import Headshot from '../pictures/headshot2.JPG';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #F7E7B0;
  height: 100vh;
  
  @media (max-width: 900px) {
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
`;

const RightSide = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  border-radius: 90px;
  height: 400px;
  margin-top: 100px;

  @media (max-width: 500px) {
    width: 60vw;
    height: 75vw;
  }
`;

const TitleText = styled.p`
  color: #303C6C;
  font-size: 35px;
  font-family: Georgia;
  margin-block-end: 20px;

  @media (max-width: 900px) {
    padding-left: 50px;
  }
`;

const BodyText = styled.p`
  color: #303C6C;
  font-size: 20px;
  font-family: Georgia;
  padding-right: 50px;

  @media (max-width: 900px) {
    padding-left: 50px;
  }
`;

const ResumeLink = styled.a`
  color: #303C6C;
  font-family: Georgia;
  font-size: 16px;
  text-decoration: none;

  :hover {
    font-weight: 600;
  }
`;

const IntroWrapper = styled.div`
  padding-top: 10px;
`;

const Line = styled.hr`
  border: 3px solid #303C6C;
  margin-inline-start: 0;
  margin-inline-end: 20px;
  width: 100px;
`;

const LineBreak = styled.div`
  display: flex;

  @media (max-width: 900px) {
    padding-left: 50px;
  }
`;

const About = () => {
  return (
    <Wrapper id='about'>
      <Layout>
        <LeftSide>
        <ImageWrapper src={Headshot}/>
        </LeftSide>
        <RightSide>
          <IntroWrapper>
            <TitleText>
              About Me
            </TitleText>
            <LineBreak>
              <Line />
              <ResumeLink 
              href={"https://drive.google.com/file/d/1jY3D1uArqNDAxk2W4oGz_0KefKu4q4VI/view?usp=sharing/"}>
                &gt;&gt; resume
              </ResumeLink>
            </LineBreak>
            <BodyText>
            Hi! My name is Cindy, and I am a Boston-based software engineer. I am currently 
            a junior majoring in Computer Science and minoring in Chemistry at 
            Northeastern University. I enjoy building impactful software that benefits others.
            <br></br><br></br>
            As a Computer Science student, I have developed strong problem solving skills 
            through taking a variety of classes at Northeastern. In order to explore more, I joined 
            some tech organizations to improve my programming skills. With my experience 
            in Javascript, Python, Java, etc., I often attend local hackathons with my friends.
            <br></br><br></br>
            I am passionate about music. In my free time, I like to sing, and I also like 
            playing instruments, such as piano and ukulele. In addition to music, I am
            very interested in photography. Photos allow me to capture the beauty in
            everyday life.
            </BodyText>
          </IntroWrapper>
        </RightSide>
      </Layout>
    </Wrapper>
  );
}

export default About;
