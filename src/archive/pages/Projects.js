import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../components/ProjectData';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Card, 
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from '@material-ui/core';

const Wrapper = styled.div`
  background: #F8AC89;
  height: 100vh;

  @media (max-width: 900px) {
    height: 100%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;
`;

const TitleText = styled.p`
  color: #303C6C;
  font-size: 35px;
  font-family: Georgia;
  margin-block-end: 20px;
`;


const Line = styled.hr`
  border: 3px solid #303C6C;
  margin-inline-start: 0;
  margin-inline-end: 20px;
  width: 60px;
`;

const CardContainer = styled.div`
  align-self: center;
  display: flex;
  
  .MuiCard-root {
    background: #EAE7DC;
    border-radius: 50px;
    height: 450px;

    :not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledCardContent = styled(CardContent)`
  height: 130px;
  overflow: auto;
`;

const StyedCardActions = styled(CardActions)`
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    color: #EAE7DC;
    font-size: 50px;
    place-self: center;
  }

  .MuiIconButton-root {
    align-self: center;
    color: unset;
    height: 70px;

    @media (max-width: 900px) {
      visibility: hidden;
    }
  }
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  :hover {
    cursor: pointer;
    transform: translate(-10px, 0px);
    transition: transform 0.2s ease;
  }

  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
  :hover {
    cursor: pointer;
    transform: translate(10px, 0px);
    transition: transform 0.2s ease;
  }

  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

const StyledCard = styled(Card)`
  max-width: 320px;

  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;

const StyledButton = styled(Button)`
  span {
    color: #000;
    font-family: Georgia;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ProjectTitle = styled.p`
  color: #000;
  font-family: Georgia;
  font-size: 25px;
  margin-block-start: 0;
  margin-block-end: 10px;
`;

const ProjectBody = styled.p`
  color: #000;
  font-family: Georgia;
  font-size: 16px;
  margin-block-start: 0;
  margin-block-end: 0;
`;


const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}) ;
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(3);

  const getProjects = (sIdx, eIdx) => {
    if (width > 900) {
      return PROJECTS.slice(sIdx, eIdx);
    } else {
      return PROJECTS;
    }
  }
  return (
    <Wrapper id='projects'>
      <Layout>
        <Container>
          <TitleText>
            Projects
          </TitleText>
          <Line />
        </Container>
        <BodyContainer>
        <IconButton onClick={() => {setStartIdx(Math.max(0, startIdx-1)); setEndIdx(Math.max(endIdx-1, 3))}}>
          <StyledArrowBackIosIcon />
        </IconButton>
        <CardContainer>
          {getProjects(startIdx, endIdx).map((item) => {
            return (
              <StyledCard key={item.key}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.img}
                  />
                  <StyledCardContent>
                    <ProjectTitle>
                      {item.name}
                    </ProjectTitle>
                    <ProjectBody>
                      {item.description}
                    </ProjectBody>
                  </StyledCardContent>
                </CardActionArea>
                <StyedCardActions>
                  <StyledButton 
                    size='small' 
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    Learn More
                  </StyledButton>
                </StyedCardActions>
              </StyledCard>)})}
            </CardContainer>
        <IconButton onClick={() => {setStartIdx(Math.min(PROJECTS.length-3, startIdx+1)); setEndIdx(Math.min(endIdx+1, PROJECTS.length))}}>
          <StyledArrowForwardIosIcon />
        </IconButton>
        </BodyContainer>
      </Layout>
    </Wrapper>
  );
}

export default Projects;
