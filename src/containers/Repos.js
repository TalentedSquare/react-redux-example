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
		this.state = {
			inputValue : "react redux"
		}
		console.log("this ",this)
	}
  componentDidMount() {
  	this.actions.fetchRepos();
  }
  _handleInput(e){
  	this.setState({
  		inputValue : e.target.value
  	})
  }
  _handleClick(e){
  	this.actions.fetchRepos(this.state.inputValue);
  }
  render() {
    const repos = this.props.repos;
    return (
      <div>
        <input 
        	type="text"
        	value={this.state.inputValue}
        	onChange={this._handleInput.bind(this)}/>
        <button
        	onClick={this._handleClick.bind(this)}
        >search repositories</button>
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
