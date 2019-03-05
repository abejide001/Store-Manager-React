/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import props from '../__mocks__/attendantMock';
import { AttendantPage } from '../../src/components/AttendantPage';

let wrapper;
describe('Snapshot', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<AttendantPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Name of the group', () => {
    let getProducts;
    beforeEach(() => {
      getProducts = sinon.stub(props, 'getProducts');
    });
    afterEach(() => {
      getProducts.reset();
    });
    it('should call component did moubt', () => {
      wrapper = shallow(<AttendantPage {...props} />);
      expect(getProducts.calledOnce).toBe(true);
    });
  });
});
