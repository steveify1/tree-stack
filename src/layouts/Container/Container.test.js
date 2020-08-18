import React from 'react';
import Container from './Container';
import { setUpComponent, findByTestAttr, checkProps } from '../../../utils';

describe('Container component', () => {
  const props = {
    children: 'test children',
  };

  describe('--> checking `propTypes`', () => {
    test('should not throw a `warning string`', () => {
      const propsErr = checkProps(Container, props);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('--> when `children` prop is passed', () => {
    test('should render an `element` with `[data-test="container"]` `attr`, with `test children` as content', () => {
      const wrapper = setUpComponent(<Container {...props} />);
      const component = findByTestAttr(wrapper, 'container');

      expect(component.length).toBe(1);
      expect(component.text()).toBe('test children');
    });
  });

  describe('--> when `children` prop is NOT passed', () => {
    test('should NOT render anything', () => {
      const wrapper = setUpComponent(<Container />);
      const component = findByTestAttr(wrapper, 'container');

      expect(component.text()).toBe('');
    });
  });
});
