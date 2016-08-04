import * as types from '../constants/app';

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
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 3000);
  };
}