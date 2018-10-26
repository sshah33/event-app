//client/components/ActivityDisplay.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddActivity from './AddActivity';
import {Link} from 'react-router-dom';

class ActivityDisplay extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
          activities: []
        };
      }
    
      componentDidMount() {
        axios.get('/api/route/activities')
          .then(res => {
            this.setState({ activities: res.data });
            console.log(this.state.activities);
          });
      }

render() {
    return (
	<div align="center">
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous" />
	<AddActivity />
  <h3>ACTIVITIES</h3>
    <table class="pure-table pure-table-bordered">
              <thead>
                <tr>
                  <th>Activity Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.activities.map(activity =>
                  <tr>
                    {/*<td><Link class="pure-button pure-button-primary" to={`api/route/activity/${activity._id}`}>{activity.activityName}</Link></td>*/}
                    <td>{activity.activityName}</td>
                  </tr>
                )}
              </tbody>
            </table>
	</div>
    );
  }
}

export default ActivityDisplay;