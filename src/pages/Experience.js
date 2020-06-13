import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #FFA99F;
  height: 100%;
  
  @media (min-width: 1030px) {
    height: 100vh;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 35px;
  padding-top: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: unset;
  }
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
  width: 100px;
`;

const Container = styled.div`
  width: 100%;
`;

const BodyContainer = styled.div`
  margin-top: 20px;
  
  @media (max-width: 900px) {
    > div {
      :not(:last-child):after {
        content: "";
        border-bottom: 1px solid #303C6C;
        width: 100%;
      }
    }
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
  }
`;

const Position = styled.span`
  color: #303C6C;
  font-size: 16px;
  font-family: Georgia;
  width: 30%;

  @media (max-width: 900px) {
    margin-bottom: 10px;
    width: unset;
  }
`;

const Description = styled.span`
  color: #303C6C;
  font-size: 16px;
  font-family: Georgia;
  width: 55%;

  @media (max-width: 900px) {
    margin-bottom: 10px;
    width: unset;
  }
`;

const Date = styled.span`
  color: #303C6C;
  font-size: 16px;
  font-family: Georgia;
  text-align: right;
  width: 15%;

  @media (max-width: 900px) {
    margin-bottom: 30px;
    width: unset;
  }
`;

const Experience = () => {
  return (
    <Wrapper id='experience'>
      <Layout>
        <Container>
          <TitleText>
            Experience
          </TitleText>
          <Line />
          <BodyContainer>
            <ExperienceContainer>
              <Position>
              <a href="https://www.paperlessparts.com" style={{ color: '#303C6C', textDecoration: 'none' }}><strong>Paperless Parts</strong></a> <i>Boston, MA</i>
              <br></br>
              Full Stack Software Engineering Co-op
              </Position>
              <Description>
              I built a project that implements 2FA using <strong>React Redux</strong> and <strong>Django</strong>. I also build several customer requested projects. 
              Additionally, I write <strong>Selenium</strong> automation tests for frontend using Javascript
              as well as managing <strong>Rainforest</strong> automation testing and QA PRs
              </Description>
              <Date>
                (Jan 2020-Present)
              </Date>
            </ExperienceContainer>
            <ExperienceContainer>
              <Position>
              <a href="https://www.sandboxnu.com" style={{ color: '#303C6C', textDecoration: 'none' }}><strong>Sandbox</strong></a> <i>Northeastern University</i>
              <br></br>
              Project Lead, Marketing & Events Director
              </Position>
              <Description>
              I led <u>"Project Signaligner"</u> and will lead "Vocab Buddy" in Fall 2020. I adapt API requests to retrieve images to display 
              on the interface using <strong>Python</strong> and <strong>Javascript</strong>. I meet with clients bi-weekly and manage stories with <strong>Agile System</strong>, and I 
            manage Sandbox social media and plan events.
              </Description>
              <Date>
                (Jan 2020-Present)
              </Date>
            </ExperienceContainer>
            <ExperienceContainer>
              <Position>
              <strong>Northeastern University</strong> <i>Boston, MA</i>
              <br></br>
              Research Assistant
              </Position>
              <Description>
              I investigate <strong>LLVM</strong> and <strong>pin tool</strong> to build <a href="https://dl.acm.org/doi/10.1145/3236454.3236505" style={{ color: '#303C6C', textDecoration: 'none' }}><u>IceBerg </u></a> 
              for <strong>C++</strong>, working under Professor <a href="https://www.khoury.northeastern.edu/people/michael-shah/" style={{ color: '#303C6C', textDecoration: 'none' }}><u>
                Mike Shah</u></a>. The goal is to profile and analyze locks and how much time we spend within critical sections.
              </Description>
              <Date>
                (Jan 2020-Present)
              </Date>
            </ExperienceContainer>
            <ExperienceContainer>
              <Position>
              <a href="https://www.hackbeanpot.com" style={{ color: '#303C6C', textDecoration: 'none'}} >
                <strong>HackBeanpot</strong></a> <i>Boston, MA</i>
              <br></br>
              Sponsorship Team Member
              </Position>
              <Description>
                I stay in contact with companies to raise fundings for Hackathon, and get feedback from companies 
                regarding the past year HackBeanpot.
              </Description>
              <Date>
                (Apr 2020-Present)
              </Date>
            </ExperienceContainer>
            <ExperienceContainer>
              <Position>
             <strong>Khoury College</strong> <i>Northeastern University</i>
              <br></br>
              TA for Fundamentals of CS I
              </Position>
              <Description>
              I held office hours and lab sessions to assist students with homework in <strong>Racket</strong>.
              I graded students’ assignments weekly and leave comments for suggestions, and I attended weekly staff 
              meeting and plan for the upcoming week with other TAs.
              </Description>
              <Date>
                (Jan 2019-Dec 2019)
              </Date>
            </ExperienceContainer>
            <ExperienceContainer>
              <Position>
                <strong>IDEAL High School</strong> <i>New York, NY</i>
              <br></br>
              Coding Club Instructor
              </Position>
              <Description>
              I partnered with friends to start up a coding organization 
              <a href="http://welovecoding.org/" style={{ color: '#303C6C', textDecoration: 'none'}} ><u>"We Love Coding"</u></a>.
              I taught <strong>Processing.js</strong> to middle school students with special needs, and designed weekly lab including 
              demonstrations, homework, and projects 
              </Description>
              <Date>
                (Jan 2019-Dec 2019)
              </Date>
            </ExperienceContainer>
          </BodyContainer>
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default Experience;
