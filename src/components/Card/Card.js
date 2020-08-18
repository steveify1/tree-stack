import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

/**
 * CardData - this is to be passed as a props to the Card component
 * @see <a href="/docs/Card.html">Card parent component</a>
 *
 * @typedef {object} CardData
 * @property {string} title - the card title
 * @property {string|number} quantity - the card quantity
 */

/**
 * Card Component - a direct child to "Cards" component: (simple Component)
 * @see <a href="/docs/Cards.html">Cards (parent component)</a>
 *
 * @component
 * @param props
 * @param {CardData} props.data - (required) for rendering the card
 *
 * @example
 * const cardProps = {
 *  data: { title: 'card title', quantity: 2 }
 * };
 *
 * return (
 *  <Card {...cardProps} />
 * )
 */
function Card(props) {
	const { data } = props;

	return (
		<div className='Card' data-test='card'>
			<header className='Card__title'>
				<h6>{data.title}</h6>
			</header>

			<main className='Card__main'>{data.quantity}</main>
		</div>
	);
}

Card.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
};

Card.defaultProps = {
	data: {},
};

export default Card;
