import React from 'react';
import Enzyme from 'enzyme';
import { findByElemName, findByTestAttr, setUpComponent } from '../../../utils';
import Aside from './Aside';
import { BrowserRouter } from 'react-router-dom';

describe('Aside component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUpComponent(<Aside />);
	});

	test('should render two elements with `[data-test="navbar"]` attr', () => {
		const navbar = findByTestAttr(wrapper, 'navbar').length;

		expect(navbar).toBe(2);
	});

	test('should render a `Button` component with `create article` as text content', () => {
		const wrapper = Enzyme.mount(
			<BrowserRouter>
				<Aside />
			</BrowserRouter>
		);
		const Button = findByElemName(wrapper, 'Button');

		expect(Button.length).toBe(1);
		expect(Button.text()).toBe('create article');
	});

	test('should render an `header` element', () => {
		const header = findByElemName(wrapper, 'header').length;

		expect(header).toBe(1);
	});

	test('should render an `footer` element', () => {
		const footer = findByElemName(wrapper, 'footer').length;

		expect(footer).toBe(1);
	});
});

