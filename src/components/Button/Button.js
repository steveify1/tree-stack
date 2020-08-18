import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

/**
 * Button component: (simple Component)
 *
 * @component
 * @param {object} props
 * @param {string} [props.variant] - (`optional`) for theme of the component. can either be `primary` | `secondary`
 * @param {boolean} [props.icon] - (`optional`) reshape the component to a circular form
 * @param {string|any} props.children - (`required`) the label of the component
 *
 * @example
 * const buttonProps = { variant: 'primary', icon: true };
 * return (
 *  <Button {...buttonProps}>my btn</Button>
 * )
 * @example
 * return (
 *  <Button variant='secondary' icon>my btn</Button>
 * )
 * @example
 * return (
 *  <Button disabled>my btn</Button>
 * )
 * @example
 * return (
 *  <Button>my btn</Button>
 * )
 */
function Button(props) {
	const { variant, icon, children, ...rest } = props;

	const formatClassName = () => {
		let className = 'Button';

		if (variant === 'primary') {
			className += ' Button--primary';
		} else if (variant === 'secondary') {
			className += ' Button--secondary';
		}

		if (icon) {
			className += ' Button--icon';
		}

		return className;
	};

	return (
		<button {...rest} className={formatClassName()}>
			{children}
		</button>
	);
}

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary']),
	icon: PropTypes.bool,
	children: PropTypes.any,
};

export default Button;
