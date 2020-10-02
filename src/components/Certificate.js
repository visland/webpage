import React from 'react';
import {Container, Row} from 'react-bootstrap';
import CertiCard from './CertiCard';
import Title from './Title';

export default function Certificate() {
  return (
    <Container className="section" id="certi">
      <Title titleText="Certificates"></Title>
      <h3 className="subTitle">Computer Science</h3>
      <Row className="center-row">
        <CertiCard 
          img="./assets/imgs/cp.jpeg"
          title="Programming Fundamentals in C" 
          text="Duke University"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/TJ9S7XVL2N5B"
        />
        <CertiCard 
          img="./assets/imgs/c.jpg"
          title="Writing, Running, and Fixing Code in C" 
          text="Duke University"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/6QPE28PJWCXM"
        />
        <CertiCard 
          img="./assets/imgs/oop.jpg"
          title="Object Oriented Programming in Java" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/JWB8EH5W7KXD"
          noteLink="./assets/files/OOP_UCSD.html.pdf"
        />
        <CertiCard 
          img="./assets/imgs/data.jpg"
          title="Data Structures and Performance" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/BBPXPP228CKC"
          noteLink="./assets/files/DS_UCSD.html.pdf"
        />
        <CertiCard 
          img="./assets/imgs/advance.jpg"
          title="Advanced Data Structures in Java" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/QU9U4FSPG26E"
          noteLink="./assets/files/ADS_UCSD.html.pdf"
        />
        <CertiCard 
          img="./assets/imgs/os.jpg"
          title="Introduction to Operating Systems" 
          text="Georgia Tech CS 8803"
        />
        <CertiCard 
          img="./assets/imgs/interc.jpg"
          title="Intermediate C++" 
          text="Microsoft"
          buttonLink="https://courses.edx.org/certificates/2e0a63ab50aa4669b32b5f12a4259b28"
        />
        <CertiCard 
          img="./assets/imgs/advancec.jpg"
          title="Advanced C++" 
          text="Microsoft"
          buttonLink="https://courses.edx.org/certificates/ad8dc921486f499492c9e5092a54e111"
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Designing, Running, Analyzing in R" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/SBQGU583KWWH"
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Social Computing" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/U4QW7LDRPN88"
        />
      </Row>
      <h3 className="subTitle">Mathematics</h3>
      <Row className="center-row">
        <CertiCard 
          img="./assets/imgs/3b1b.png"
          title="Essence of linear algebra" 
          text="Youtube Series"
          buttonLink="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
          noteLink="./assets/files/1b3b.html.pdf"
        />
        <CertiCard 
          img="./assets/imgs/linear.jpg"
          title="Mathematics for ML: Linear Algebra" 
          text="Imperial College London"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/VJ8WBA7FXT3J"
        />
        <CertiCard 
          img="./assets/imgs/metadata.png"
          title="Introduction to Graph Theory" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/F3N5F7TYSEV9"
        />
        <CertiCard 
          img="./assets/imgs/com.jpg"
          title="Combinatorics and Probability" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/FMNN2JA5W7H7"
        />
      </Row>
      <h3 className="subTitle">Human-Computer Interaction</h3>
      <Row className="center-row">
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Information Design" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/4374D2D8LS95"
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Input and Interaction" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/5BF64NPF6NQ6"
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="UX: Research & Prototyping" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/82J564LPTJRY"
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Intro to Human-Centered Design" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/5FDDR72ELYQB" 
        />
        <CertiCard 
          img="./assets/imgs/hci.jpg"
          title="Design Principles: an Introduction" 
          text="UC San Diego"
          buttonLink="https://www.coursera.org/account/accomplishments/verify/QJ7R35XDWS7D"
        />
      </Row>
    </Container>
  );
}