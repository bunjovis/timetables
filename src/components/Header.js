import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Timetables</h1>
      <h2>
        Or, how do I get from
        <span className="fromstring"> Eficode headquarters </span>to
        <span className="tostring"> Helsinki railway station</span>?
      </h2>
    </header>
  );
};

export default Header;
