import React from 'react';
import Col from 'react-bootstrap/Col';

const Itinerary = props => {
  console.log(props.data);
  const itinerary = props.data.data.plan.itineraries[0];
  console.log(itinerary);
  return itinerary.legs.map((leg, key) => {
    return <Col key={key}>Duration: {Math.ceil(leg.duration / 60)} min</Col>;
  });
};
export default Itinerary;
