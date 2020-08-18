import React from 'react';
import Enzyme from 'enzyme';
import { setUpComponent, findByTestAttr, checkProps } from '../../utils';
import Card from './Card';

describe('Card component', () => {
  const props = {
    data: {
      title: 'test title',
      quantity: '3',
    },
  };

  test('should render a wrapping `element` with `[data-test="card"]` `attr`', () => {
    const wrapper = setUpComponent(<Card {...props} />);
    const component = findByTestAttr(wrapper, 'card').length;

    expect(component).toBe(1);
  });

  describe('--> checking `propTypes`', () => {
    test('should not throw a `warning string`', () => {
      const propsErr = checkProps(Card, props);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('--> when `data` prop is passed', () => {
    test('should render correct data', () => {
      const wrapper = Enzyme.mount(<Card {...props} />);

      expect(wrapper.text()).toContain('test title');
      expect(wrapper.text()).toContain('3');
    });
  });

  describe('--> when `data` prop is NOT passed', () => {
    test('should render correct data', () => {
      const wrapper = Enzyme.mount(<Card />);

      expect(wrapper.text()).toBe('');
    });
  });
});
