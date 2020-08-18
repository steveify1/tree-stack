import React from 'react';
import Button from './Button';
import { setUpComponent, findByTestAttr, findByElemName } from '../../utils';

describe('Button component', () => {
  describe('--> with `children` prop', () => {
    test('should render without errors', () => {
      const props = {
        children: 'test children',
      };
      const wrapper = setUpComponent(<Button {...props} />);

      const component = findByElemName(wrapper, 'button');

      expect(component.length).toBe(1);
      expect(component.text()).toBe('test children');
    });
  });

  describe('--> without `children` prop', () => {
    test('should render any content', () => {
      const wrapper = setUpComponent(<Button />);

      const component = findByElemName(wrapper, 'button');

      expect(component.text()).toBe('');
    });
  });
});
