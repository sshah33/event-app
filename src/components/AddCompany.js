import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddCompany extends Component {

  constructor() {
    super();
    this.state = {
        cmpnyName: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const cmpnyName = this.state.cmpnyName;
    console.log(cmpnyName);
    axios.post('/api/route/insertCompany', { cmpnyName })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const cmpnyName = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD COMPANY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home </Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Company">Company:</label>
                <input type="text" class="form-control" name="cmpnyName" onChange={this.onChange} />
              </div>
              <button type="submit" class="btn btn-default">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCompany;