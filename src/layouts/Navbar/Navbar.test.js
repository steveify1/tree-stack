import React from 'react';
import { setUpComponent, findByTestAttr, checkProps } from '../../../utils';
import Navbar from './Navbar';

describe('Navbar component', () => {
	const props = {
		list: [
			{ header: 'test header 1', href: '/' },
			{ header: 'test header 2', href: '/' },
		],
	};

	describe('--> checking props', () => {
		test('should not throw a `warning string`', () => {
			const propsErr = checkProps(Navbar, props);

			expect(propsErr).toBeUndefined();
		});
	});

	describe('--> when `list` prop is passed', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUpComponent(<Navbar {...props} />);
		});

		test('should render an `element` `[data-test="list"]`', () => {
			const list = findByTestAttr(wrapper, 'list').length;

			expect(list).toBe(1);
		});

		test('should render more than two `elements` with `[data-test="item"]` && `[data-test="link"]` `attr`', () => {
			const item = findByTestAttr(wrapper, 'item').length;
			const link = findByTestAttr(wrapper, 'link').length;

			expect(item).toBeGreaterThan(1);
			expect(link).toBeGreaterThan(1);
		});
	});

	describe('--> when `list` prop is NOT passed', () => {
		const wrapper = setUpComponent(<Navbar />);

		test('should render two `elements` with `[data-test="item"]` && `[data-test="link]` `attr` (due to `defaultProps`)', () => {
			const item = findByTestAttr(wrapper, 'item').length;
			const link = findByTestAttr(wrapper, 'link').length;

			expect(item).toBe(2);
			expect(link).toBe(2);
		});
	});
});

