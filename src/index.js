import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import AppConstants from './constants/App';
import AppActions from './actions/App';
import { Provider } from 'react-redux';

const
  appConstants = new AppConstants(),
  appActions = new AppActions({ appConstants }),
  initialState = {
    test : 'Hello World',
    boolTest : false
  },
  reducer = (state = initialState, action) => {

    switch(action.type) {

      case appConstants.CHANGE_BOOL:
        return Object.assign({}, state, {
          boolTest : true
        });

      default:
        return state;

    }

  },
  store = createStore(reducer);

ReactDOM.render((

  <Provider store={store}>
    <App injector={{ appActions }} />
  </Provider>

), document.getElementById('root'));
