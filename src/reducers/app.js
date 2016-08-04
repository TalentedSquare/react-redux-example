import { appConstants } from '../app';

const initialState = {
  test : 'Hello World',
  boolTest : false
};

export const appReducer = function (state = initialState, action){

  switch(action.type) {

    case appConstants.CHANGE_BOOL:

      return Object.assign({}, state, {
        boolTest : !state.boolTest
      });

    default:
      return state;

  }

};

export default { appReducer }