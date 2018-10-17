import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              HOME PAGE
            </h3>
          </div>
          
          <div class="panel-body">
            <h4><Link to="/companyDisplay"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Display Companies</Link></h4>
            <h4><Link to="/activityDisplay"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Display Activities</Link></h4>
            <h4><Link to="/addEvent"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Event</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;