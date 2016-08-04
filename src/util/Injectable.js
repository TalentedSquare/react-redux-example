import { Component } from 'react';

class DummySuper {}

const isSuperReactComponent = (Super) => {

  if (Super === Component) {
    return true;
  }

  return (Object.getPrototypeOf(Super) === Component);

};

export const injectable = (Super = DummySuper) => class extends Super {

  constructor(...args) {

    console.log('Super', Super);

    console.log(...args);

    super(...args);
    let provider = args[0];

    if (isSuperReactComponent(Super)) {
      provider = provider.props;
    }

    Object.assign(this, provider);

  }

};

export default injectable;