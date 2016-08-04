import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import app, { AppContainer } from './app';

ReactDOM.render((

  <Provider store={app.store}>
    <AppContainer app={app} />
  </Provider>

), document.getElementById('root'));