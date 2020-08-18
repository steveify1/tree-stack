import React from 'react';
import './Main.scss';
import { Aside, MainContent, Container } from '../index';

/**
 * Main Component - content of this component is wrapped with the "Container" component: (layout Component)
 * @see <a href="/docs/Container.html">Container (child component)</a>
 *
 * @component
 * @example
 * return (
 *  <Main />
 * )
 */
function Main() {
  return (
    <main className="Main">
      <Container>
        <MainContent data-test="content" />
        <Aside data-test="aside" />
      </Container>
    </main>
  );
}

export default Main;
