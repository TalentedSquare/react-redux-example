export default class AppAction {

  constructor(injector = {}) {
    Object.assign(this, injector);
  }

  changeBool() {
    return {
      type : this.appActions.CHANGE_BOOL
    }
  }

}
