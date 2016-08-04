import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect((state) => ({
    hello : state.appReducer.test,
    boolTest : state.appReducer.boolTest
}))
export default class App extends Component {

  render() {

    const
      app = this.props.app,
      actions = bindActionCreators(app.actions, this.props.dispatch);

    console.debug('AppContainer.render()', 'props', this.props);
    console.debug('AppContainer.render()', 'actions', actions);

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
