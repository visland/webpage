import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import Title from './Title';

export default function Recom() {
  return (
    <Container className="section" id="recom">
      <Row>
        <Title titleText="Recommendation"></Title>
        <Card className="contentCard">
          <Card.Body className="recomText">
            <p>I had the pleasure of working with Xiaohan during her internship with Intuit, 
            June-September 2020. In this time she consistently impressed us with the 
            <span className="pinkBold"> high bar</span> she set for her work, her ability to learn 
            new systems, technology, and 
            development tools <span className="pinkBold">very quickly</span>, and the extent that she was able to make <span className="pinkBold">significant 
            contributions</span> to our product and was able to provide support for less experienced 
            interns on the team. </p>
            <p>Xiaohan was very <span className="pinkBold">easy to work with</span> and demonstrates a <span className="pinkBold">curiosity </span>
            for software engineering and a passion for <span className="pinkBold">continuously improving</span> her own skills as 
            a professional. She was able to build quality solutions independently, appropriately 
            escalated any issues she encountered, and was <span className="pinkBold">highly proactive</span> in looking for 
            meaningful ways to contribute and executed on those with a <span className="pinkBold">high level of autonomy</span>. </p>
            <p>I would be happy to work with Xiaohan again given the opportunity, and would strongly 
            recommend her for any position she applies to.</p>
          </Card.Body>
          <img className="quote" alt="quote" src={require("./assets/imgs/quote.svg")}></img>
          <Card.Text className="rightText">
            -- <span style={{fontWeight: "bold", color: "gray"}}>James Dutczak</span> (Senior Software Development Manager, Intuit)
          </Card.Text>
        </Card>
      </Row>
    </Container>
  );
}