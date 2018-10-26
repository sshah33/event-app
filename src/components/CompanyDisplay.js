//client/components/CompanyDisplay.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddCompany from './AddCompany';
import {Link} from 'react-router-dom';

class CompanyDisplay extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
          companies: []
        };
      }
    
      componentDidMount() {
        axios.get('/api/route/companies')
          .then(res => {
            this.setState({ companies: res.data });
            console.log(this.state.companies);
          });
      }

render() {
    return (
	<div align="center">
  <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous" />
	<AddCompany />
  <h3>COMPANIES</h3>
    <table class="pure-table pure-table-bordered">
              <thead>
                <tr>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companies.map(company =>
                  <tr>
                    {/* <td><Link class="pure-button pure-button-primary" to={`api/route/company/${company._id}`}>{company.cmpnyName}</Link></td>*/}
                    <td>{company.cmpnyName}</td>
                  </tr>
                )}
              </tbody>
            </table>
	</div>
    );
  }
}

export default CompanyDisplay;