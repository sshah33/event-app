import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

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
            <h4><Link class="pure-button pure-button-primary" to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home </Link></h4>
            <form class="pure-form" onSubmit={this.onSubmit}>
            <table class="pure-table pure-table-horizontal">
            <tr>
                <td><label for="Company">Company:</label></td>
                <td><input type="text" required class="form-control" name="cmpnyName" onChange={this.onChange} /></td>
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

export default withRouter(AddCompany);