

    //client/components/DisplayEvents.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DisplayEvents extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
          events: []
        };
      }
    
      componentDidMount() {
        axios.get('/api/route/events')
          .then(res => {
            this.setState({ events: res.data });
            console.log(this.state.events);
          });
      }

render() {
    return (
            
        <div>
            <h3>EVENTS</h3>
        <table class="table table-stripe">
        <thead>
          <tr>
            <th>Company</th>
            <th>Activity</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.events.map(event =>
            <tr>
              <td>{event.company}</td><td>{event.activity}</td><td>{event.start}</td><td>{event.end}</td>
           </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default DisplayEvents;