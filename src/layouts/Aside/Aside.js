import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../store/menu';
import { Navbar } from '../';
import CloseIcon from '../../components/CloseIcon/CloseIcon';
import LightBox from '../../components/LightBox/LightBox';
import './Aside.scss';

/**
 * Aside Component - a direct child of Main component: (layout Component)
 * @see <a href="/docs/Main.html">Main (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Aside />
 * )
 */
function Aside() {
  const state = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <Fragment>
      {state.open && (
        <LightBox onClick={() => dispatch(closeMenu())} color="whit" />
      )}

      <aside className={`Aside ${state.open ? 'open' : ''}`}>
        <CloseIcon onClick={() => dispatch(closeMenu())} />

        <header className="Aside__header">
          <Navbar
            data-test="navbar"
            addNavLink
            list={[
              { header: 'home', href: '/' },
              { header: 'services', href: '/services' },
              { header: 'portfolio', href: '/portfolio' },
              { header: 'open source', href: '/open-source' },
              { header: 'about', href: '/about' },
              { header: 'contact', href: '/contact' },
              { header: 'sign in', href: '/signin' },
            ]}
          />
        </header>

        <footer className="Aside__footer">
          <Navbar
            data-test="navbar"
            list={[{ header: 'support', href: '/support' }]}
          />

          <div className="Aside__version">version 1.0.0</div>
        </footer>
      </aside>
    </Fragment>
  );
}

export default Aside;
