/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import register from './serviceWorker';
import CompanyDisplay from './components/CompanyDisplay';
import ActivityDisplay from './components/ActivityDisplay';
import DisplayEvents from './components/DisplayEvents';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/companyDisplay' component={CompanyDisplay} />
        <Route path='/activityDisplay' component={ActivityDisplay} />
        <Route path='/displayEvents' component={DisplayEvents} />
      </div>
  </Router>,
  document.getElementById('root')
);
//ServiceWorker.register();