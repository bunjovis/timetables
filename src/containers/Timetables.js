import React from 'react';
import Row from 'react-bootstrap/Row';
import './Timetables.css';
import Itinerary from '../components/Itinerary';
const testData = {
  data: {
    plan: {
      itineraries: [
        {
          walkDistance: 751.8871538595846,
          duration: 724,
          legs: [
            {
              startTime: 1579614531000,
              endTime: 1579614970000,
              mode: 'WALK',
              duration: 439.0,
              distance: 496.4060000000001,
              from: {
                stop: null,
              },
              to: {
                stop: {
                  lon: 24.931215,
                  lat: 60.16883,
                  name: 'Kamppi',
                },
              },
            },
            {
              startTime: 1579614970000,
              endTime: 1579615025000,
              mode: 'SUBWAY',
              duration: 55.0,
              distance: 507.91963524344703,
              from: {
                stop: {
                  lon: 24.931215,
                  lat: 60.16883,
                  name: 'Kamppi',
                },
              },
              to: {
                stop: {
                  lon: 24.939846,
                  lat: 60.170379,
                  name: 'Rautatientori',
                },
              },
            },
            {
              startTime: 1579615025000,
              endTime: 1579615255000,
              mode: 'WALK',
              duration: 230.0,
              distance: 255.11499999999998,
              from: {
                stop: {
                  lon: 24.939846,
                  lat: 60.170379,
                  name: 'Rautatientori',
                },
              },
              to: {
                stop: null,
              },
            },
          ],
        },
        {
          walkDistance: 550.7516153998237,
          duration: 734,
          legs: [
            {
              startTime: 1579614524000,
              endTime: 1579614763000,
              mode: 'WALK',
              duration: 239.0,
              distance: 266.21,
              from: {
                stop: null,
              },
              to: {
                stop: {
                  lon: 24.925518,
                  lat: 60.17119,
                  name: 'Kauppakorkeakoulut',
                },
              },
            },
            {
              startTime: 1579614763000,
              endTime: 1579614985000,
              mode: 'TRAM',
              duration: 222.0,
              distance: 729.5016871965561,
              from: {
                stop: {
                  lon: 24.925518,
                  lat: 60.17119,
                  name: 'Kauppakorkeakoulut',
                },
              },
              to: {
                stop: {
                  lon: 24.93798,
                  lat: 60.17023,
                  name: 'Lasipalatsi',
                },
              },
            },
            {
              startTime: 1579614985000,
              endTime: 1579615258000,
              mode: 'WALK',
              duration: 273.0,
              distance: 284.127,
              from: {
                stop: {
                  lon: 24.93798,
                  lat: 60.17023,
                  name: 'Lasipalatsi',
                },
              },
              to: {
                stop: null,
              },
            },
          ],
        },
        {
          walkDistance: 972.2033846315379,
          duration: 841,
          legs: [
            {
              startTime: 1579614507000,
              endTime: 1579615348000,
              mode: 'WALK',
              duration: 841.0,
              distance: 971.7629999999999,
              from: {
                stop: null,
              },
              to: {
                stop: null,
              },
            },
          ],
        },
      ],
    },
  },
};

class Timetables extends React.Component {
  constructor() {
    super();
    this.state = { testing: testData };
  }

  render() {
    return (
      <div id="timetables">
        <Row>
          <Itinerary data={this.state.testing} />
        </Row>
      </div>
    );
  }
}

export default Timetables;
