import React from 'react';
import Row from 'react-bootstrap/Row';
import './Timetables.css';
import Itinerary from '../components/Itinerary';

class Timetables extends React.Component {
  constructor() {
    super();
    this.state = { itineraries: [] };
    // Fetch itineraries from HSL
    this.fetchItineraries = this.fetchItineraries.bind(this);
    this.fetchItineraries();
    // Fetch new itineraries every 1 min (60000ms)
    setInterval(this.fetchItineraries, 60000);
  }

  fetchItineraries() {
    // Send POST-request with fetch, GraphQL query as body
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
        // Set response as state
        this.setState({ itineraries: resJson.data.plan.itineraries });
      });
  }

  render() {
    const { itineraries } = this.state;
    // If itineraries aren't loaded yet
    if (itineraries[0] === undefined) {
      return <div>Loading data...</div>;
    }
    // Show itineraries
    return (
      <div id="timetables">
        <Row className="itinerary">
          <Itinerary data={itineraries[0]} />
        </Row>
        <Row className="itinerary">
          <Itinerary data={itineraries[1]} />
        </Row>
        <Row className="itinerary">
          <Itinerary data={itineraries[2]} />
        </Row>
      </div>
    );
  }
}

export default Timetables;
