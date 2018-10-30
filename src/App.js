import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class App extends Component {

  render() {
    return (
      <div align="center">
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous" />
          <h3>Welcome to the Event App!</h3>
          <table class="pure-table">
            <thead>
            <th><h3>Home Page</h3></th>
            </thead>
            <tbody>
            <tr><td><h4><Link to="/companyDisplay" class="pure-button pure-button-primary" style={{width: '100%'}}> Display Companies</Link></h4></td></tr>
            <tr><td><h4><Link to="/activityDisplay" class="pure-button pure-button-primary" style={{width: '100%'}}> Display Activities</Link></h4></td></tr>
            <tr><td><h4><Link to="/displayEvents" class="pure-button pure-button-primary" style={{width: '100%'}}> Add Event</Link></h4></td></tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;