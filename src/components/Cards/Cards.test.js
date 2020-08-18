import React from 'react';
import {
	setUpComponent,
	findByElemName,
	findByTestAttr,
	checkProps,
} from '../../utils';
import Cards from './Cards';

describe('Cards component', () => {
	const props = {
		cardList: [{ title: 'test title', quantity: 3 }],
	};

	describe('--> checking `propTypes`', () => {
		test('should not throw a `warning string`', () => {
			const propsErr = checkProps(Cards, props);

			expect(propsErr).toBeUndefined();
		});
	});

	describe('--> when `cardList` prop is passed', () => {
		test('should render at least a `Card` `component`', () => {
			const wrapper = setUpComponent(<Cards {...props} />);
			const Card = findByElemName(wrapper, 'Card').length;

			expect(Card).toBeGreaterThan(0);
		});
	});

	describe('--> when `cardList` prop is NOT passed', () => {
		test('should not render any `Card` `component`', () => {
			const wrapper = setUpComponent(<Cards />);
			const Card = findByElemName(wrapper, 'Card').length;

			expect(Card).toBe(0);
		});
	});
});
