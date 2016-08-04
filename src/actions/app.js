import * as types from '../constants/app';
import fetch from 'isomorphic-fetch'

export function changeBool() {
    return {
      type : types.CHANGE_BOOL
    }
  }
export function increment() {
    return {
      type : types.INCREMENT_NUMB
    }
  }
export function incrementBegin() {
	return {
	  type : types.INCREMENT_BEGIN
	}
}
export function incrementAsync() {
  return dispatch => {
  	dispatch(incrementBegin());
    setTimeout(() => {
      dispatch(increment());
    }, 2000);
  };
}
export function getRepos(data) {
    return {
      type : types.GET_REPOS_SUCCESS,
      data : data
    }
  }
export function getReposBegin() {
  return {
    type : types.GET_REPOS
  }
}
export function fetchRepos() {
  return dispatch => {
    dispatch(getReposBegin());
    return fetch(`https://api.github.com/search/repositories?q=react+redux:javascript&sort=stars&order=desc`)
      .then(response => response.json())
      .then(json =>
        dispatch(getRepos(json))
      )
  };
}