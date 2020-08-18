import React from 'react';
import MainContent from './MainContent';
import { setUpComponent, findByTestAttr } from '../../../utils';

describe('MainContent component', () => {
	test('should render an element `[data-test="main-content"]` at least something as text content', () => {
		const wrapper = setUpComponent(<MainContent />);
		const component = findByTestAttr(wrapper, 'main-content');

		expect(component.text()).toBeTruthy();
	});
});

