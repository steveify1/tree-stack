import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { closeMenu } from '../../store/menu';

/**
 * Navbar Component: (layout Component)
 * @see <a href="/docs/Header.html">Header (parent component)</a>
 * @see <a href="/docs/Main.html">Main (parent component)</a>
 *
 * @component
 * @param props
 * @param {Array<{header: string, href: string}>} props.list - (required) for displaying nav-links
 *
 * @example
 * return (
 *  <Navbar>the dashboard<Navbar>
 * )
 */
function Navbar(props) {
  const { list, addNavLink, ...rest } = props;
  const dispatch = useDispatch();

  const handleMenuItemCLick = (event) => {
    dispatch(closeMenu());
  };

  return (
    <nav {...rest} className="Navbar">
      <ul data-test="list" className="Navbar__list">
        {list.map((item) => (
          <li data-test="item" key={uuid()} className="Navbar__item ">
            {addNavLink ? (
              <NavLink
                exact
                to={item.href}
                data-test="link"
                className="Navbar__link flex ai-center"
                activeClassName="Navbar__link--active"
                onClick={handleMenuItemCLick}
              >
                <span>{item.icon}</span>
                <span>{item.header}</span>
              </NavLink>
            ) : (
              <Link
                to={item.href}
                data-test="link"
                className="Navbar__link"
                onClick={handleMenuItemCLick}
              >
                {item.header}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  /**
   * addNavLink is a `boolean` - adds the `NavLinks` instead of `Links`
   */
  addNavLink: PropTypes.bool,
  /**
   * list is an `Array<object>`
   * @example
   * list = `[{header: 'dashboard', path: '/dashboard'}]`
   */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

Navbar.defaultProps = {
  list: [
    {
      header: 'item 1',
      href: '/',
    },
    {
      header: 'item 2',
      href: '/',
    },
  ],
};

export default Navbar;
