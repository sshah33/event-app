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
	<div>
	<AddActivity />
    <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Activity Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.activities.map(activity =>
                  <tr>
                    <td><Link to={`api/route/activity/${activity._id}`}>{activity.activityName}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
	</div>
    );
  }
}

export default ActivityDisplay;