import { appConstants } from '../app';

const initialState = {
  test : 'Hello World',
  boolTest : false
};

export const appReducer = function (state = initialState, action){

  console.debug('appReducer <- state', state);
  console.debug('appReducer <- action', action);

  switch(action.type) {

    case appConstants.CHANGE_BOOL:

      console.debug('appReducer -> CHANGE_BOOL()');

      return Object.assign({}, state, {
        boolTest : !state.boolTest
      });

    default:

      console.debug('appReducer -> default()');

      return state;

  }

};

export default { appReducer }