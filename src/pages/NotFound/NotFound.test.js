import React from 'react';
import { setUpComponent, findByElemName, findByTestAttr } from '../../../utils';
import NotFound from './NotFound';

describe('NotFound component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUpComponent(<NotFound />);
	});

	test('should render a Section component as direct child', () => {
		const Section = findByElemName(wrapper, 'Section').length;
		expect(Section).toBe(1);
	});
	test('should render an element with `[data-test="not-found"]', () => {
		const notFound = findByTestAttr(wrapper, 'not-found').length;

		expect(notFound).toBe(1);
	});
});

