import React from 'react';
import { findByTestAttr, setUpComponent } from '../../utils';
import Brand from './Brand';

describe('Brand component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUpComponent(<Brand />);
  });

  test('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'brand').length;

    expect(component).toBe(1);
  });

  test('should have a content', () => {
    const content = findByTestAttr(wrapper, 'content');

    expect(content.length).toBe(1);
    expect(content.text()).toBe('articulation');
  });

  //   test('should have at least a content', () => {
  //     const content = findByTestAttr(wrapper, 'content').length;

  //     expect(content).toBeGreaterThan(0);
  //   });
});
