import { createStore } from 'redux';
import reducers, { appReducer } from './reducers/app';
import * as constants from './constants/app';
import * as actions from './actions/app';
import Container from './containers/App';

export const
  AppContainer = Container,
  appConstants = constants,
  appReducers = reducers,
  appActions = actions,
  appStore = createStore(appReducer);

console.log(appActions);

export default  { Container, constants, reducers, actions, store : appStore };