//client/components/Add.js

import React from 'react';
import axios from 'axios';
import DisplayEvents from './DisplayEvents'
import {Link} from 'react-router-dom';
//import Select from 'react-select';

class AddEvent extends React.Component {
constructor() {
      super();
    this.state = {
        companies: [],
        activities: [],
        activity: '',
        company: '',
        start: '',
        end: '',
        selectedActivity: null,
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.insertNewEvent = this.insertNewEvent.bind(this);

}


componentDidMount() {
  axios.get('/api/route/events')
  .then(res => {
    this.setState({ activities: res.data });
    console.log(this.state.activities);
  });

    axios.get('/api/route/activities')
        .then(res => {
        this.setState({ activities: res.data });
        console.log(this.state.activities);
        });

        axios.get('/api/route/companies')
        .then(res => {
          this.setState({ companies: res.data });
          console.log(this.state.companies);
        });
    }

onClick(e) {
      this.insertNewEvent(this);
    }
insertNewEvent(e) {
const { activity, company, start, end } = this.state;
	axios.post('/api/route/insertEvent',{ activity, company, start, end }).then((result) => {
        this.props.history.push("/")
      });
}

handleSelect = (selectedActivity) => {
  this.setState({ selectedActivity });
  console.log(`Option selected:`, selectedActivity);
}

handleChange(e) {
const state = this.state;
state[e.target.name] = e.target.value;
    this.setState(state);

  }
render() {
  const activities=this.state.activities;
  const companies=this.state.companies;
  let optionActivities = activities.map((activity) =>
                <option value={activity.activityName}>{activity.activityName}</option>
            );
  
  let optionCompanies = companies.map((company) =>
  <option value={company.cmpnyName} >{company.cmpnyName}</option>
        );
const { activity, company, start, end } = this.state;

    return ( 
      <div>
        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home </Link></h4>
        <DisplayEvents />
        <br></br>
      <form onSubmit={this.onClick}>
       <table class="table table-stripe">
       <thead>
         <th>Add Event</th>
       </thead>
       <tbody>
         <tr>
          <td>activity:</td>
         
         <td><select onChange={this.handleChange} name="activity" value="">
         <option selected disabled value="">select...</option>
          { optionActivities }
          </select></td>
          </tr>
          <tr>
          <td>company:</td>
          
          <td><select onChange={this.handleChange} name= "company" value=""> 
          <option selected disabled value="">select...</option>
          { optionCompanies }
          </select></td>
          </tr>
          <tr>
          <td>start:</td>
          <input type="date" name= "start" value={start} onChange={this.handleChange} />
         </tr>
         <tr>
          <td>end:</td>
          <td><input type="date" name= "end" value={end} onChange={this.handleChange} /></td>
         </tr>
         <tr>
          <td><input type="submit" value="Add" /></td>
        </tr>
        </tbody>
        </table>
      </form>
      </div>
    );
  }
}
export default AddEvent;
