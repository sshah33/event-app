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
	<div>
	<AddCompany />
    <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companies.map(company =>
                  <tr>
                    <td><Link to={`api/route/company/${company._id}`}>{company.cmpnyName}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
	</div>
    );
  }
}

export default CompanyDisplay;