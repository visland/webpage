import React from 'react';
import {Container} from 'react-bootstrap';

export default function Title(props) {
  return(
    <Container className="section-title">
      <span className="dot"></span>
      <h1 className="section-title-text">{props.titleText}</h1>
    </Container>
  );
}