import { appConstants } from '../app';

const initialState = {
  test : 'Hello World',
  boolTest : false,
  numb : 0,
  incrementing : false
};

export const appReducer = function (state = initialState, action){

  switch(action.type) {

    case appConstants.CHANGE_BOOL:

      return Object.assign({}, state, {
        boolTest : !state.boolTest
      });

    case appConstants.INCREMENT_NUMB:
      return Object.assign({}, state, {
        numb : state.numb + 1 ,
        incrementing : false
      });

    case appConstants.INCREMENT_BEGIN:
      return Object.assign({}, state, {
        incrementing : true
      });

    default:
      return state;

  }

};

export default { appReducer }