import React from 'react';
import Enzyme from 'enzyme';
import { findByElemName, findByTestAttr, setUpComponent } from '../../../utils';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUpComponent(<Header />);
	});

	test('should render a wrapping `header` element', () => {
		const component = findByElemName(wrapper, 'header').length;

		expect(component).toBe(1);
	});

	test('should render an element with `[data-test="brand"]` attr', () => {
		const brand = findByTestAttr(wrapper, 'brand').length;

		expect(brand).toBe(1);
	});

	test('should render a `cta`:(not-required), with `new project` as text content:(required)', () => {
		const wrapper = Enzyme.mount(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);

		expect(wrapper.text()).toContain('new project');
	});

	test('should render a user-icon', () => {
		const userIcon = findByTestAttr(wrapper, 'user-icon').length;

		expect(userIcon).toBe(1);
	});
});

