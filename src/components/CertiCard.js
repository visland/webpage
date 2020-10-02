import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function CertiCard(props) {
  return (
    <Card className="certi-card">
      <Card.Img variant="top" className="noMobile card-img" src={require(`${props.img}`)} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        {props.buttonLink? 
          <Button 
            variant="outline-primary" 
            className="btn-small" 
            href={props.buttonLink}
          >
           Certificate
          </Button> :
          <p className="pinkBold" style={{fontSize: "0.9rem", marginBottom:"0"}}>No Certificate provided</p>
        }
        {props.noteLink && 
        <Button 
          variant="outline-dark" 
          className="btn-small" 
          href={require(`${props.noteLink}`)}
        >
          My Note
        </Button>}
      </Card.Body>
    </Card>
  );
}