import React from 'react';
import './MainContent.scss';
import { Switch, Route } from 'react-router-dom';
import { Home, Services, NotFound } from '../../pages';

/**
 * MainContent Component - a direct child of "Main" component, where the main content:(composed routed pages component/s) of the application is displayed: (layout Component)
 * @see <a href="/docs/Main.html">Main (parent component)</a>
 *
 * @see <a href="/docs/Dashboard.html">Dashboard (child component)</a>
 *
 * @component
 * @example
 * return (
 *  <MainContent>
 *    <Section>the dashboard<Section>
 *  </MainContent>
 * )
 */
function MainContent() {
  return (
    <main className="MainContent" data-test="main-content">
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/services"
          exact
          render={(props) => <Services {...props} />}
        />
        <Route path="*" render={(props) => <NotFound {...props} />} />
      </Switch>
    </main>
  );
}

export default MainContent;
