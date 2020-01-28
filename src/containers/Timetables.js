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
                lon: 24.931215,
                lat: 60.16883,
                stop: {
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
const testData2 = {
  data: {
    plan: {
      itineraries: [
        {
          walkDistance: 751.8871538595846,
          duration: 739,
          legs: [
            {
              startTime: 1580034588000,
              endTime: 1580035027000,
              mode: 'WALK',
              duration: 439.0,
              distance: 496.4060000000001,
              from: {
                lon: 24.9257659,
                lat: 60.1697351,
                stop: null,
              },
              to: {
                lon: 24.931215,
                lat: 60.16883,
                stop: {
                  name: 'Kamppi',
                },
              },
            },
            {
              startTime: 1580035027000,
              endTime: 1580035097000,
              mode: 'SUBWAY',
              duration: 70.0,
              distance: 507.91963524344703,
              from: {
                lon: 24.931215,
                lat: 60.16883,
                stop: {
                  name: 'Kamppi',
                },
              },
              to: {
                lon: 24.939846,
                lat: 60.170379,
                stop: {
                  name: 'Rautatientori',
                },
              },
            },
            {
              startTime: 1580035097000,
              endTime: 1580035327000,
              mode: 'WALK',
              duration: 230.0,
              distance: 255.11499999999998,
              from: {
                lon: 24.939846,
                lat: 60.170379,
                stop: {
                  name: 'Rautatientori',
                },
              },
              to: {
                lon: 24.941295,
                lat: 60.171199,
                stop: null,
              },
            },
          ],
        },
        {
          walkDistance: 586.7711538586675,
          duration: 787,
          legs: [
            {
              startTime: 1580034591000,
              endTime: 1580035020000,
              mode: 'WALK',
              duration: 429.0,
              distance: 460.9600000000001,
              from: {
                lon: 24.9257659,
                lat: 60.1697351,
                stop: null,
              },
              to: {
                lon: 24.93143,
                lat: 60.16795,
                stop: {
                  name: 'Kampintori',
                },
              },
            },
            {
              startTime: 1580035020000,
              endTime: 1580035260000,
              mode: 'TRAM',
              duration: 240.0,
              distance: 680.3706567305292,
              from: {
                lon: 24.93143,
                lat: 60.16795,
                stop: {
                  name: 'Kampintori',
                },
              },
              to: {
                lon: 24.9413,
                lat: 60.17036,
                stop: {
                  name: 'Rautatieasema',
                },
              },
            },
            {
              startTime: 1580035260000,
              endTime: 1580035378000,
              mode: 'WALK',
              duration: 118.0,
              distance: 125.47000000000001,
              from: {
                lon: 24.9413,
                lat: 60.17036,
                stop: {
                  name: 'Rautatieasema',
                },
              },
              to: {
                lon: 24.941295,
                lat: 60.171199,
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
              startTime: 1580034564000,
              endTime: 1580035405000,
              mode: 'WALK',
              duration: 841.0,
              distance: 971.7629999999999,
              from: {
                lon: 24.9257659,
                lat: 60.1697351,
                stop: null,
              },
              to: {
                lon: 24.941295,
                lat: 60.171199,
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
    this.state = { itineraries: [] };
    this.fetchItineraries = this.fetchItineraries.bind(this);
    this.fetchItineraries();
    setInterval(this.fetchItineraries, 60000);
  }

  componentDidMount() {}

  fetchItineraries() {
    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          plan(
            fromPlace: "Eficode headquarters::60.1697351,24.9257659"
            toPlace: "Helsinki train station::60.171199,24.941295"
            numItineraries: 3
        
          ) {
            itineraries {
                duration
              legs {
                startTime
                endTime
                mode
                duration
                from {
                    lon
                    lat
                    stop {
                        name
                    }
                }
                to {
                    lon
                        lat
                    stop {
                        name
                    }
                }
              }
            }
          }
        }`,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({ itineraries: resJson.data.plan.itineraries });
      });
  }

  render() {
    if (this.state.itineraries[0] == undefined) {
      return <div>Loading data...</div>;
    }
    return (
      <div id="timetables">
        <Row className="itinerary">
          <Itinerary data={this.state.itineraries[0]} />
        </Row>
        <Row className="itinerary">
          <Itinerary data={this.state.itineraries[1]} />
        </Row>
        <Row className="itinerary">
          <Itinerary data={this.state.itineraries[2]} />
        </Row>
      </div>
    );
  }
}

export default Timetables;
