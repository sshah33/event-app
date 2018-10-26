import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'


class AddActivity extends Component {

  constructor() {
    super();
    this.state = {
        activityName: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const activityName = this.state.activityName;
    console.log(activityName);
    axios.post('/api/route/insertActivity', { activityName })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const activityName = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD ACTIVITY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link class="pure-button pure-button-primary" to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home </Link></h4>
            <form class="pure-form" onSubmit={this.onSubmit}>
            <table class="pure-table pure-table-horizontal">
            <tr>
                <td><label for="Activity">Activity:</label></td>
                <td><input type="text" required class="form-control" name="activityName" onChange={this.onChange} /></td>
            </tr>
            <tr>
              <td></td><td><button type="submit" class="pure-button pure-button-primary">Add</button></td>
            </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddActivity);