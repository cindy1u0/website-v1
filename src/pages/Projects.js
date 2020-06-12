import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

import Headshot from '../pictures/headshot2.JPG';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
  background: #24305E;
  height: 100vh;
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
  color: #fff;
  font-size: 35px;
  font-family: Georgia;
  margin-block-end: 20px;
`;


const Line = styled.hr`
  border: 3px solid #fff;
  margin-inline-start: 0;
  margin-inline-end: 20px;
  width: 60px;
`;

const CardContaner = styled.div`
  align-self: center;
  .MuiCard-root {
    background: #A8D0E6;
    border-radius: 50px;
    height: 450px;

    :not(:last-child) {
      pointer-events: none;
    }
  }
`;

const StyledCard = styled(Card)`
  max-width: 320px;
`;

const Projects = () => {
  return (
    <Wrapper>
      <Layout>
        <Container>
          <TitleText>
            Projects
          </TitleText>
          <Line />
        </Container>
        <CardContaner>
          <StyledCard>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={Headshot}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </StyledCard>
        </CardContaner>
      </Layout>
      <Footer color="#fff" />
    </Wrapper>
  );
}

export default Projects;
