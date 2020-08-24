import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../store/menu';
import { FiHome, FiMenu, FiMail } from 'react-icons/fi';
import { Container } from '../';
import Brand from '../../components/Brand/Brand';
import './Header.scss';

/**
 * Header Component - content of this component is wrapped with the "Container" component: (layout Component)
 * @see <a href="/docs/Container.html">Container (child component)</a>
 *
 * @component
 * @example
 * return (
 *  <Header />
 * )
 */
function Header() {
  const dispatch = useDispatch();

  return (
    <header className="Header">
      <Container className="flex jc-space-between">
        <NavLink to="/" className="icon icon--home">
          <FiHome />
        </NavLink>

        <Brand data-test="brand" />

        <div className="Header__icons">
          <button
            id="subscription-cta"
            aria-label="subsription button"
            title="subscribe"
            className="btn btn--sm btn--secondary flex ai-center"
          >
            <FiMail />
            <span>Subscribe</span>
          </button>
          <FiMenu
            arial-label="menu icon"
            className="icon hamburger"
            onClick={() => dispatch(openMenu())}
          />
        </div>
      </Container>
    </header>
  );
}

export default Header;
