import React from 'react';
import Col from 'react-bootstrap/Col';
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
  const itinerary = props.data;
  return itinerary.legs.map((leg, key) => {
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
function createFromString(from) {
  // If stop is null, the location must be Eficode headquarters since all other legs start from a stop
  if (from.stop == null) {
    return `Eficode headquarters`;
  }
  return from.stop.name;
}
function createToString(to) {
  // If stop is null, the location must be Helsinki train station
  if (to.stop == null) {
    return `Helsinki railway station`;
  }
  return to.stop.name;
}
function createTimeString(time) {
  return `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  }`;
}
function createLegMapString(leg) {
  return `https://www.mapquestapi.com/staticmap/v5/map?key=HVMFDycJdaaG0wJGrEKizGFJO5wyWrfp&size=200,200&locations=${leg.from.lat},${leg.from.lon}|marker-start||${leg.to.lat},${leg.to.lon}|marker-end`;
}
export default Itinerary;
