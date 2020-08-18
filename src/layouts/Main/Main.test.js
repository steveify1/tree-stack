import React from 'react';
import Main from './Main';
import { setUpComponent, findByTestAttr, findByElemName } from '../../../utils';

describe('Main component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUpComponent(<Main />);
	});

	test('should render a `main element`', () => {
		const component = findByElemName(wrapper, 'main').length;

		expect(component).toBe(1);
	});

	test('should render an element with `[data-test="aside"]` attr', () => {
		const aside = findByTestAttr(wrapper, 'aside').length;

		expect(aside).toBe(1);
	});

	test('should render an element with `[data-test="content"]` attr', () => {
		const content = findByTestAttr(wrapper, 'content').length;

		expect(content).toBe(1);
	});
});

