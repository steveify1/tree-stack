import React from 'react';
import Card from '../Card/Card';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

/**
 * Cards Component - a direct child to "Cards" component: (simple Component)
 * @see <a href="/docs/Card.html">Card (child component)</a>
 *
 * @component
 * @param props
 * @param {Array<object>} props.cardList - (required) for displaying cards in the list
 *
 * @example
 * const cardsProps = {
 *    cardList: [
 *      { title: 'total articles', quantity: '15' },
 *      { title: 'total collections', quantity: '5' }
 *    ]
 *  };
 *
 * return (
 *  <Cards {...cardsProps} />
 * )
 */
function Cards(props) {
	const { cardList } = props;

	return (
		<>
			{cardList && cardList.map((card) => <Card data={card} key={uuid()} />)}
		</>
	);
}

Cards.propTypes = {
	cardList: PropTypes.arrayOf(PropTypes.object),
};

export default Cards;
