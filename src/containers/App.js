import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Timetables from './Timetables';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Timetables />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default App;
