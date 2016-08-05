import { appConstants } from '../app';

const initialState = {
  numb : 0,
  title : 'GitHub Trending',
  isDrawerOpen : false
};

export const appReducer = (state = initialState, action) => {

  switch(action.type) {

    case appConstants.TOGGLE_DRAWER:

      return Object.assign({}, state, {
        isDrawerOpen : !state.isDrawerOpen
      });

    default:
      return state;

  }

};

export default { appReducer }
