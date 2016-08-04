import { combineReducers, createStore } from 'redux';
import reducers from './reducers/app';
import * as constants from './constants/app';
import * as actions from './actions/app';
import Container from './containers/App';

import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export const
  AppContainer = Container,
  appConstants = constants,
  appReducers = reducers,
  appActions = actions,
  appStore = createStore(combineReducers({
  	...reducers,
  	routing: routerReducer
  }), (window.devToolsExtension && window.devToolsExtension())),
  appHistory = syncHistoryWithStore(browserHistory, appStore);

export default  { Container, constants, reducers, actions, store : appStore };
