import autoBind from 'react-autobind';
export default class AppAction {

  constructor(injector = {}) {
    Object.assign(this, injector);
    autoBind(this);
  }

  changeBool() {
    return {
      type : this.appConstants.CHANGE_BOOL
    }
  }

}
