//client/components/Add.js

import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';

//import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';

class AddEvent extends React.Component {
constructor() {
      super();
    this.state = {
        companies: [],
        activities: [],
        activity: '',
        company: '',
        start: null,
        end: null,
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
      e.preventDefault();
      this.insertNewEvent(this);
      this.render();
    }
insertNewEvent(e) {
  const { activity, company, start, end } = this.state;
	axios.post('/api/route/event',{ activity, company, start, end }).then(() => {
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
handleTime(date, label) {
  const state = this.state;
  state[label] = date;
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
      <div class="table100-head">
        <h4><Link class="pure-button pure-button-primary" to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home </Link></h4>
        <h2>EVENTS</h2>
        <br></br>
      <form class="pure-form" onSubmit={this.onClick}>
       <table class="pure-table pure-table-horizontal">
       <thead>
         <th colspan="2">Add Event</th>
       </thead>
       <tbody>
         <tr class="row100 head">
          <td>Activity:</td>
         
         <td><select onChange={this.handleChange} name="activity" required>
         <option selected disabled value="">select...</option>
          { optionActivities }
          </select></td>
          </tr>
          <tr class="row100 head">
          <td>Company:</td>
          
          <td><select onChange={this.handleChange} name= "company" required> 
          <option selected disabled value="">select...</option>
          { optionCompanies }
          </select></td>
          </tr>
          <tr class="row100 head">
          <td>Start:</td>
          <td><DatePicker
              required
              selected={this.state.start}
              showTimeSelect
              selectsStart
              timeFormat="HH:mm"
              dateFormat="LLL"
              minDate={moment()}
              maxDate={this.state.end}
              startDate={this.state.start}
              endDate={this.state.end}
              onChange={(date) => {
                this.handleTime(date, 'start')
              }}
          /></td>
          </tr>
          <tr class="row100 head">
          <td>End:</td>
          <td><DatePicker
              required
              selected={this.state.end}
              showTimeSelect
              selectsEnd
              timeFormat="HH:mm"
              dateFormat="LLL"
              minDate={this.state.start}
              startDate={this.state.start}
              endDate={this.state.end}
              onChange={(date) => {
                this.handleTime(date, 'end')
              }}
          /></td>
          </tr>
         <tr class="row100 head">
          <td></td><td><input type="submit" class="pure-button pure-button-primary" value="Add" /></td>
        </tr>
        </tbody>
        </table>
      </form>
      </div>
    );
  }
}
export default withRouter(AddEvent);
