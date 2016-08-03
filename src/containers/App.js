import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  hello : state.test,
  boolTest : state.boolTest
}))
export default class App extends Component {

  constructor(props) {
    super(props);
    Object.assign(this, this.props.injector);
  }

  componentDidMount() {

    const actions = bindActionCreators(this.appActions, this.props.dispatch);
    console.log('actions', actions);
  }

  render() {

    return (
      <div>
        <h1>{this.props.hello}</h1>
        <a onClick={this.appActions.changeBool}>Click</a>
        <p><strong>boolTest :</strong> {this.props.boolTest}</p>
      </div>
    );

  }
}
