import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  hello : state.test
}))
export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    Object.assign(this, props.injector);
  }

  render() {
    const
      { dispatcher, appActions, hello } = this.props,
      actions = bindActionCreators(appActions, dispatcher);

    return (
      <div>
        <h1>{hello}</h1>
      </div>
    );
  }
}
