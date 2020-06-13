import React from 'react';
import styled from 'styled-components';
import { PHOTOS } from '../components/PhotoData';
import Gallery from 'react-photo-gallery';

const Wrapper = styled.div`
  background: #fff;
  height: 100%;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const TitleText = styled.p`
  color: #303C6C;
  font-size: 35px;
  font-family: Georgia;
  margin-block-end: 20px;

  ::before,
  ::after {
      content: "";
      border-bottom: 3px solid #303C6C;
      width: 30%;
      display: inline-block;
      position: relative;
      top: -10px;

      @media (max-width: 900px) {
        width: 15%;
      }
    }
  }
`;

const Container = styled.div`
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const PhotoContainer = styled.div`
  margin: 0 20px;
`;


const Photography = () => {
  return (
    <Wrapper id="photography">
      <Layout>
        <Container>
          <TitleText>
          &nbsp;Photography&nbsp;
          </TitleText>
          <PhotoContainer>
            <Gallery photos={PHOTOS}/>
          </PhotoContainer>
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default Photography;
