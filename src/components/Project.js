import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Title from './Title';

export default function Project() {
  return (
    <div className="pink section" id="project">
      <Container>
      <Row>
        <Title titleText="Projects"></Title>
        <Row style={{paddingTop: "30px"}}>
          <Col xs={12} sm={7}>
            <iframe 
              src="https://www.youtube.com/embed/NxhroRAbF8U"
              title="ready-player-one"
              allowFullScreen
              style={{width: "100%", height: "100%", border: "none"}}
            />
          </Col>
          <Col xs={12} sm={5}>
            <h4 className="project-title">Ready Player One: A Java Game</h4>
            <p className="project-subtitle">
              Queensland University of Technology <br></br>
              Advisor: Dr. Jared Donovan
            </p>
            The concept is based on the movie ‘Ready Player One’. Same as the movie, the player is going to collect
            three keys to win Halliday’s easter egg. The player has to win three games to collect all the keys: a car racing game, 
            a dancing game, and a key chasing game. The game combines sound, movement, vision input and output.
            <br />
            <br />
            In the design stage, I utilized UML to visualize the design and structure. Then, I massively adopted different
            OOP design principles to achieve different functions. The project is originaly based in Java, however, I rebased it
            to Processing for the course assignment requirement. 
          </Col>
        </Row>
        <Row className="topPad">
          <Col xs={12} sm={5}>
            <h4 className="project-title">Visuliazation of Chinese Female Poets</h4>
            <p className="project-subtitle">
              State Key Lab of CAD&CG, Zhejiang University <br></br>
              <a href="http://www.xinhuanet.com/video/sjxw/2018-09/20/c_1123459232.htm" className="publish">
                Published</a> by Xinhua Net Data News (in Chinese) <br></br>
              Advisor: Prof. Wei Chen
            </p>
            In Chinese Tang Dynasty, as many females did not have the right to get educated and speak publicly, 
            hundreds of females tried to pursue a higher social status by writing poems and engaging in social 
            activities among male poets. These female potes often get overlooked, so we decided to make a data 
            Visuliazation project to raise the awareness of female's contribution to Chinese culture.
            <br></br>
            <br></br>
            In this project, we analyzed the data from China Biographical Database Project (CBDB). We visualized 
            the number of male and female poets in different times to show how few female potes are, we also picture 
            the social relationships among poets in Tang Dynasty and the word frequency of poems written by male 
            and female poets.
          </Col>
          <Col xs={12} sm={7}>
            <img 
              src={require("./assets/imgs/tang.jpg")}
              style={{width: "100%", height: "auto"}}
              alt="tang-poet"
            />
          </Col>
        </Row>
      </Row>
      </Container>
    </div>
  );
}