import * as types from '../constants/App';


const initialState = {
    test : 'Hello World',
    boolTest : false
  };

export default function appReducer(state = initialState, action){

  switch(action.type) {

    case types.CHANGE_BOOL:
      return Object.assign({}, state, {
        boolTest : !state.boolTest
      });

    default:
      return state;

  }

}
