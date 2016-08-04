import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import app from './../app';

@connect((state) => ({
    repos : state.reposReducer
}))
export default class Repos extends Component {

  render() {

    const actions = bindActionCreators(app.actions, this.props.dispatch);
    const repos = this.props.repos;
    return (
      <div>
       	<div onClick={()=>{
          actions.fetchRepos()
        }}>CLICK TO FETCH </div>
        <div>
          { repos.loading ? "loading repos" : (repos.loaded ? "loaded " +repos.repos.total_count : "")}
        </div>
        {	
        	repos.loaded && repos.repos.items.map((item,i)=>{
        		return <p key={i}>{ item.full_name }</p>
        	}) 
        }
        <br/><br/>
      </div>
    );

  }
}
