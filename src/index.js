import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer, appStore, appHistory } from './app';
import { Router, Route,IndexRoute } from 'react-router'
import Repos from './containers/Repos';

let Home = () => <div>I am the index route component (default)</div>
let Users = () => <div>users page</div>


ReactDOM.render((

  <Provider store={appStore}>
  	<Router history={appHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route path="users" component={Users} />
    	  <Route path="repos" component={Repos} />
      </Route>
    </Router>

  </Provider>

), document.getElementById('root'));
