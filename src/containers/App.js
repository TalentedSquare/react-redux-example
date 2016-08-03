import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/App';

@connect(state => ({
  hello : state.test,
  boolTest : state.boolTest
}))
export default class App extends Component {

  constructor(props) {
    super(props);
    Object.assign(this, props.appActions);
  }

  render() {
    const actions = bindActionCreators(AppActions, this.props.dispatch);
    console.log("render dan ** ",actions.changeBool)
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <a onClick={()=>{
          actions.changeBool();
        }}>Click</a>
        <p><strong>boolTest :</strong> {this.props.boolTest ? "true" : "false"}</p>
      </div>
    );

  }
}
