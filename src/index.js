import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import AppConstants from './constants/App';
import AppActions from './actions/App';
import { Provider } from 'react-redux';
import appReducer from './reducers/App';

const store = createStore(appReducer);

ReactDOM.render((

  <Provider store={store}>
    <App />
  </Provider>

), document.getElementById('root'));
