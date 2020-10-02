import React from 'react';
import {Container, Card, CardColumns} from 'react-bootstrap';
import Title from './Title';

export default function Fun() {
  var rows = [], i = 1, len = 15;
  while (++i <= len) rows.push(i);
  return(
    <div className="section pink" id="fun">
      <Container>
      <Title titleText="Fun Gallery"></Title>
      <p className="subTitle" style={{textAlign: "left", marginTop: "0"}}>
        I have had a thing for <span className="pinkBold">painting</span> since I was very young. 
        I have always seen painting as my biggest hobby, and I usually 
        draw pictures of my thoughts and my life. I’m mainly doing digital 
        art on my iPad recently, but I can also do different types of traditional painting.
        You can see my art works <a className="email" href="https://www.instagram.com/xiaohanjune/">here</a>.
        <br/>
        Other than painting, I play <span className="pinkBold">acoustic guitar</span> and 
        love <span className="pinkBold">70s rock music</span>, 
        I don’t have particular favorite bands because I love almost every song in this genre ;-)
</p>
      <CardColumns>
        <Card><Card.Img src={require("./assets/imgs/guitar-1.jpeg")} /></Card>
        <Card><Card.Img src={require("./assets/imgs/guitar-3.jpeg")} /></Card>
        {rows.map((value) =>
          <Card><Card.Img src={require(`./assets/imgs/${value}.JPG`)} /></Card>
        )}
        <Card><Card.Img src={require("./assets/imgs/guitar-2.jpeg")} /></Card>
        <Card><Card.Img src={require("./assets/imgs/art-1.png")} /></Card>
        <Card><Card.Img src={require("./assets/imgs/art-2.png")} /></Card>
        <Card><Card.Img src={require("./assets/imgs/5 copy.JPG")} /></Card>
      </CardColumns>
      </Container>
    </div>
  );
}