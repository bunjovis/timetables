import React from 'react';
import Col from 'react-bootstrap/Col';
import {
  createFromString,
  createToString,
  createTimeString,
  createLegMapString,
} from '../helpers/ItineraryHelpers';
// Import logos for different transport methods
import walk from './img/walk.svg';
import tram from './img/tram.svg';
import bus from './img/bus.svg';
import subway from './img/subway.svg';
import './Itinerary.css';

const logos = {
  WALK: walk,
  TRAM: tram,
  BUS: bus,
  SUBWAY: subway,
};

const Itinerary = props => {
  // Get one itinerary as prop
  const itinerary = props.data;
  return itinerary.legs.map((leg, key) => {
    // Create different strings to use in jsx
    const startDateString = createTimeString(new Date(leg.startTime));
    const endDateString = createTimeString(new Date(leg.endTime));
    const fromString = createFromString(leg.from);
    const toString = createToString(leg.to);
    const durationString = `${Math.ceil(leg.duration / 60)} min`;
    const legMapString = createLegMapString(leg);
    return (
      <Col key={key} className="leg">
        <div>
          <img
            src={logos[leg.mode]}
            className="transportlogo"
            width="auto"
            alt={leg.mode}
          />
        </div>
        <div>
          <img src={legMapString} alt="Map" />
        </div>
        <div>
          Start time: {startDateString}
          <br />
          From: <span className="fromstring">{fromString}</span>
          <br />
          End time: {endDateString}
          <br />
          To: <span className="tostring">{toString}</span>
          <br />
          Duration: {durationString}
        </div>
      </Col>
    );
  });
};

export default Itinerary;
