import React from 'react';
import { createTimeString } from '../helpers/ItineraryHelpers';
import './Clock.css';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    this.updateTime = this.updateTime.bind(this);
    setInterval(this.updateTime, 60000);
  }

  updateTime() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;
    const timestring = createTimeString(time);
    return <span id="clock">Time now: {timestring}</span>;
  }
}
export default Clock;
