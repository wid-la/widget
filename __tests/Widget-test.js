import chai, { expect } from 'chai';
import mockery from 'mockery';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe.skip('Widget', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });
    mockery.registerMock(
      'decorators',
      require('helpers/test/decoratorsMock')
    );
  });

  afterEach(() => {
    mockery.deregisterMock('decorators');
    mockery.disable();
  });

  it('should be defined', () => {
    const Widget = require('../Widget');
    const wrapper = shallow((
      <Widget />
    ));

    expect(wrapper).to.be.ok();
  });

  it('should consistently render the component', () => {
    const Widget = require('../Widget');
    const wrapper = shallow((
      <Widget />
    ));

    expect(wrapper.find('.flex-1')).to.have.length(1);
    expect(wrapper.find('.flex-2')).to.have.length(1);
    expect(wrapper.find('.tall')).to.have.length(1);
    expect(wrapper.find('.flex-1').text()).to.contain('80');
    expect(wrapper.find('.flex-2').text()).to.contain('20');
  });
});
