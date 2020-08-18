import React from 'react';
import './Container.scss';
import PropTypes from 'prop-types';
/**
 * Container Component - used majorly for "Header" and "Main" components. Helps control the "max-width" of content and centers it to the page: (layout Component)
 * @see <a href="/docs/Header.html">Header (parent component)</a>
 * @see <a href="/docs/Main.html">Main (parent component)</a>
 *
 * @component
 * @param props
 * @param {string} [props.className] - (optional) additional className selector/s
 * @param {string|any} props.children - (required) the content fo the component
 *
 * @example
 * return (
 *  <Container>...</Container>
 * )
 * @example
 * return (
 *  <Container className="Header__container">...</Container>
 * )
 */
function Container(props) {
	const { children, className } = props;

	return (
		<div
			data-test='container'
			className={`Container ${className ? className : ''}`}
		>
			{children}
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.any,
};

export default Container;
