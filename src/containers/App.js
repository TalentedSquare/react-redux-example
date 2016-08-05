import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

import app from './../app';

@connect((state) => ({
    title : state.appReducer.title,
    isDrawerOpen : state.appReducer.isDrawerOpen
}))
export default class App extends Component {

  static propTypes = {
    title : PropTypes.string,
    isDrawerOpen : PropTypes.bool
  };

  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {

    const actions = bindActionCreators(app.actions, this.props.dispatch);

    return (
      <div>

        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={actions.toggleDrawer}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Drawer
          docked={false}
          open={this.props.isDrawerOpen}>
          <MenuItem onTouchTap={actions.toggleDrawer} containerElement={<Link to="/" />} primaryText="Home" />
          <MenuItem onTouchTap={actions.toggleDrawer} containerElement={<Link to="/users" />} primaryText="Users" />
          <MenuItem onTouchTap={actions.toggleDrawer} containerElement={<Link to="/repos" />} primaryText="Repositories" />
        </Drawer>

        {this.props.children ? <Paper>{this.props.children}</Paper> : ''}

      </div>
    );

  }
}
