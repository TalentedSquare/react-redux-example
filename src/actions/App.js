import autoBind from 'react-autobind';
import * as types from '../constants/App';

export function changeBool() {
    return {
      type : types.CHANGE_BOOL
    }
  }
