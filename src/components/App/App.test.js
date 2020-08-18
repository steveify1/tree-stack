import React from 'react';
import App from './App';
import { setUpComponent, findByTestAttr } from '../../utils';

describe('App component', () => {
  test('should render without errors', () => {
    const wrapper = setUpComponent(<App />);
    const component = findByTestAttr(wrapper, 'app');

    expect(component.length).toBe(1);
  });
});
