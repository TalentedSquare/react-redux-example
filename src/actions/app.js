import * as types from '../constants/app';
import fetch from 'isomorphic-fetch'

export const
  toggleDrawer = () => ({
    type : types.TOGGLE_DRAWER
  }),
  getRepos = (data) => ({
    type : types.GET_REPOS_SUCCESS,
    data : data
  }),
  getReposBegin = () => ({
    type : types.GET_REPOS
  }),
  fetchRepos = (filter) => (dispatch) => {
      dispatch(getReposBegin());
      return fetch(`https://api.github.com/search/repositories?q=${filter}:javascript&sort=stars&order=desc`)
        .then(response => response.json())
        .then(json =>
          dispatch(getRepos(json))
        );
  };
