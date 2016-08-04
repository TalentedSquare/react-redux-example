import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import app from './../app';

@connect((state) => ({
    hello : state.appReducer.test,
    boolTest : state.appReducer.boolTest
}))
export default class App extends Component {

  render() {

    const actions = bindActionCreators(app.actions, this.props.dispatch);

    return (
      <div>
        <h1>{this.props.hello}</h1>
        <Link to="/">Home </Link>
        <br/>
        <Link to="/users">users</Link>
        <br/>
        <Link to="/repos">repos </Link>
        <br/>
        <a onClick={()=>{
          actions.changeBool();
        }}>Click me to change the bool value</a>
        <p><strong>boolTest :</strong> {this.props.boolTest ? "true" : "false"}</p>
        {this.props.children}
      </div>
    );

  }
}
