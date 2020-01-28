import React from 'react';
import Col from 'react-bootstrap/Col';
import Clock from './Clock';
import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <div id="headertext">
        <h1>Timetables</h1>
        <br />
        <span>
          Or, how do I get from
          <span className="fromstring"> Eficode headquarters </span>to
          <span className="tostring"> Helsinki railway station</span>?
        </span>
      </div>
      <div id="clock">
        <Clock />
      </div>
    </div>
  );
};

export default Header;
