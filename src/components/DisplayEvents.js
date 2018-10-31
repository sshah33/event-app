

    //client/components/DisplayEvents.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddEvent from './AddEvent';

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

      deleteEvent(id, e)
      {
        console.log(id , e);
        axios.delete('/api/route/event/'+id)
        .then((result) => {
          this.componentDidMount();
        });
      }


render() {
    return (
        <div align="center">
         <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous" />
        <AddEvent />
            <h3>All Events</h3>
        <table class="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>Company</th>
            <th>Activity</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.events.map(event =>
            <tr>
              <td>{event.company}</td><td>{event.activity}</td><td>{event.start}</td><td>{event.end}</td><td><button type="button" class="pure-button button-error" onClick={(e) => {this.deleteEvent(event._id, e)}}>Delete</button></td>
           </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default DisplayEvents;