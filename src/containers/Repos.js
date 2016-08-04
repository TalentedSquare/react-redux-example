import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import app from './../app';


@connect((state) => ({
    repos : state.reposReducer
}))

export default class Repos extends Component {
	constructor(props) {
		super(props);
		this.actions = bindActionCreators(app.actions, this.props.dispatch);
	}
  componentDidMount() {
  	this.actions.fetchRepos();
  }
  render() {
    const repos = this.props.repos;
    return (
      <div>
       	<div onClick={()=>{
          actions.fetchRepos()
        }}>CLICK TO FETCH </div>
        <div>
          { repos.loading ? "loading repos" : (repos.loaded ? repos.repos.items.length + " repositories loaded" : "")}
        </div>
        {	
        	repos.loaded &&  <ItemsTable items={repos.repos.items}/>
        }
        
        <br/><br/>
      </div>
    );

  }
}
class ItemsTable extends Component {
	render(){
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>index</th>
							<th>repository name</th>
							<th>link</th>
						</tr>
						{
							this.props.items.map((item,i)=>{
				        		return <tr key={i}>
				        				<td>{ i + 1}</td>
				        				<td>{ item.full_name }</td>
				        				<td>
				        					<a href={item.html_url}><b>link to repo</b></a>
				        				</td>
				        			</tr>
				        	}) 
				        }
				    </tbody>
				</table> 
			</div>
		)
	}
}
