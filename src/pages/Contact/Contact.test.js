import React from 'react';
import { setUpComponent, findByElemName } from '../../../utils';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
   // test('should render a wrapping element with `[data-test="dashboard"]`')

   test('should one or more `Section` component/s', () => {
      const wrapper = setUpComponent(<Dashboard />);
      const Section = findByElemName(wrapper, 'Section').length;

      expect(Section).toBeGreaterThan(0);
   });
});

