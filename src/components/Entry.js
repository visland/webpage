import React from 'react';
import Intrudoction from './Intrudoction';
import Recom from './Recom'
import NavBar from './NavBar'
import Project from './Project'
import Certificate from './Certificate'
import Fun from './Fun'
import ScrollArrow from './ScrollArrow'

import "./style/style.scss";

function Entry() {
  return (
    <div className="Entry">
      <NavBar />
      <Intrudoction />
      <Recom />
      <Project />
      <Certificate />
      <Fun />
      <ScrollArrow />
      <footer className="footerText">
        <span role="img" aria-label="heart">❤️❤️❤️</span>Made with <a className="email" href="https://reactjs.org/">React</a> &  
        <a className="email" href="https://react-bootstrap.netlify.app/"> react-bootstrap</a> by Xiaohan Zhu 
        <span role="img" aria-label="heart">❤️❤️❤️</span>
        <p>Copyright &copy; 2020 Xiaohan Zhu. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Entry;
