import React from 'react';
import './Section.scss';
import PropTypes from 'prop-types';

/**
 * Section Component - a direct child to "pages" components eg:"Dashboard": (layout Component)
 * @see <a href="/docs/Dashboard.html">Dashboard (parent component)</a>
 * @see <a href="/docs/Articles.html">Articles (parent component)</a>
 * @see <a href="/docs/Collections.html">Collections (parent component)</a>
 * @see <a href="/docs/Sequels.html">Sequels (parent component)</a>
 * @see <a href="/docs/Projects.html">Projects (parent component)</a>
 * @see <a href="/docs/Reviews.html">Reviews (parent component)</a>
 * @see <a href="/docs/Schedules.html">Schedules (parent component)</a>
 * @see <a href="/docs/Support.html">Support (parent component)</a>
 * @see <a href="/docs/Tutorials.html">Tutorials (parent component)</a>
 * @see <a href="/docs/NotFound.html">NotFound (parent component)</a>
 *
 * @component
 * @param props
 * @param {string} [props.className] - (optional) additional className selector/s
 * @param {boolean} [props.onBg] - (optional) adds no background and reset some CSS vars
 * @param {string|any} props.children - (required) the content fo the component
 *
 * @example
 * return (
 *  <Section>the dashboard<Section>
 * )
 */
function Section(props) {
	const { noBg, children } = props;

	const formatClassName = () => {
		let className = 'Section';

		if (props.className) {
			className += ` ${props.className}`;
		}
		if (noBg) {
			className += ` Section--no-bg`;
		}

		return className;
	};

	return <section className={formatClassName()}>{children}</section>;
}

Section.propTypes = {
	children: PropTypes.any,
	noBg: PropTypes.bool,
	className: PropTypes.string,
};

export default Section;
