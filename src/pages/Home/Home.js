import React from 'react';
import { FaChevronRight, FaBookOpen, FaList, FaPen } from 'react-icons/fa';

/**
 * Dashboard Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Dashboard />
 * )
 */

function Home() {
  return (
    <div className="Home">
      <h1 className="headline headline--3">Welcome to our app</h1>
    </div>
  );
}

export default Home;
