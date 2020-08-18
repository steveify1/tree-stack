import React from 'react';
import './Aside.scss';
import { Navbar } from '../';
import Button from '../../components/Button/Button';

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
  return (
    <aside className="Aside">
      <header className="Aside__header">
        <Navbar
          data-test="navbar"
          addNavLink
          list={[
            { header: 'services', href: '/services' },
            { header: 'portfolio', href: '/portfolio' },
            { header: 'products', href: '/products' },
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
  );
}

export default Aside;
