import React from 'react';
import {Image, Container, Row, Col, Button} from 'react-bootstrap';

import "./style/introduction.scss";

export default function Intrudoction() {
  return (
    <div className="pink section topPad" id="about">
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <Image src={require("./assets/imgs/xiaohan.jpg")} className="pic"/> 
          </Col>
          <Col xs={12} sm={8}>
            <h1 style={{fontSize: "65px", fontWeight: "800"}}>Hi there!</h1>
            <h1 style={{fontWeight: "600", fontSize: "30px"}}>I'm Xiaohan - pronounced as 'Shiao-han' ;-)</h1>
            <p style={{width: "90%"}}>
              <p>I'm a Master's student in Computer Science at University of California, San Diego. 
              With rich experience in design, I'm passionate about <span className="pinkBold">UI/UX</span> and  
              <span className="pinkBold"> front-end/full-stack development</span>.</p>
              <p>I'm a self-motivated <span className="pinkBold">dream chaser</span>. People once told me "female can't do engineering", 
              but now I'm working hard to prove that I can, and I am able to do science, especially 
              computer science, very well as a female.</p>
              <p>I'm also a passionate <span className="pinkBold">MOOCer</span>. I have completed and earned certificates of 17 online 
              courses from top universities around the world.</p>
              <p>You can email me at: <a className="email" href="mailTo:xhzjune@gmail.com">xhzjune@gmail.com</a></p>
            </p>
            <Button 
              variant="outline-primary" 
              href={require("./assets/files/Resume.pdf")}
            >
              Resume
            </Button>
            <Button 
              variant="outline-info" 
              href="https://www.linkedin.com/in/xh-zhu/"
            >
              LinkedIn
            </Button>
            <Button 
              variant="outline-dark" 
              href="https://github.com/visland"
            >
              GitHub
            </Button>
            <Button 
              variant="outline-danger" 
              href="https://www.instagram.com/xiaohanjune/"
            >
              My Art Works
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}