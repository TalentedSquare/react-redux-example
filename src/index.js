import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import app, { AppContainer, history } from './app';
import { Router, Route,IndexRoute } from 'react-router'

let Home = () => <div>I am the index route component (default)</div>
let Users = () => <div>users page</div>
let Repos = () => <div>repos page</div>


ReactDOM.render((

  <Provider store={app.store}>
  	<Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route path="users" component={Users}/>
    	<Route path="repos" component={Repos}/>
      </Route>
    </Router>
    
  </Provider>

), document.getElementById('root'));
<AppContainer app={app} />