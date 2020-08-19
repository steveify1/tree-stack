import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaHome,
  FaBookReader,
  FaCog,
  FaPhoneSquare,
  FaUser,
  FaCode,
} from 'react-icons/fa';
import {
  FiHome,
  FiBook,
  FiSettings,
  FiBox,
  FiPhone,
  FiUser,
  FiCode,
} from 'react-icons/fi';
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
              { header: 'home', href: '/', icon: <FiHome className="icon" /> },
              {
                header: 'services',
                href: '/services',
                icon: <FiSettings className="icon" />,
              },
              {
                header: 'portfolio',
                href: '/portfolio',
                icon: <FiBox className="icon" />,
              },
              {
                header: 'open source',
                href: '/open-source',
                icon: <FiCode className="icon" />,
              },
              {
                header: 'about',
                href: '/about',
                icon: <FiBook className="icon" />,
              },
              {
                header: 'contact',
                href: '/contact',
                icon: <FiPhone className="icon" />,
              },
              {
                header: 'sign in',
                href: '/signin',
                icon: <FiUser className="icon" />,
              },
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
