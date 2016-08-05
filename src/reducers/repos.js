import { appConstants } from '../app';

const initialState = {
  loaded : false,
  repos : {}
};

export const reposReducer = (state = initialState, action) => {

  switch(action.type) {

    case appConstants.GET_REPOS:

      return Object.assign({}, state, {
        loading : true
      });

    case appConstants.GET_REPOS_SUCCESS:
      return Object.assign({}, state, {
        loading : false,
        loaded : true,
        repos : action.data
      });

    default:
      return state;

  }

};

export default { reposReducer }
