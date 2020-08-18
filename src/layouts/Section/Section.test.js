import React from 'react';
import Section from './Section';
import { setUpComponent, findByElemName, checkProps } from '../../../utils';

describe('MainContent component', () => {
  const props = {
    children: 'test children',
  };

  test('should render a `section element`', () => {
    const wrapper = setUpComponent(<Section />);
    const component = findByElemName(wrapper, 'section').length;

    expect(component).toBe(1);
  });

  describe('--> checking `propTypes`', () => {
    test('should not throw a `warning string`', () => {
      const propsErr = checkProps(Section, props);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('--> when `children` prop is passed ', () => {
    test('should render `no content` as the text content (due to `defaultProps`)', () => {
      const wrapper = setUpComponent(<Section {...props} />);
      const component = findByElemName(wrapper, 'section');

      expect(component.text()).toBe('test children');
    });
  });

  describe('--> when `children` prop is NOT passed ', () => {
    test('should NOT render anything as text content', () => {
      const wrapper = setUpComponent(<Section />);
      const component = findByElemName(wrapper, 'section');

      expect(component.text()).toBe('');
    });
  });
});
