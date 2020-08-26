import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../layouts/Container/Container';
import PageLoader from '../../components/PageLoader/PageLoader';
import Loader from '../../components/Loader/Loader';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import Project1 from '../../assets/img/header-design-landing-page.png';
import Project2 from '../../assets/img/03066e02-be17fb49-top-ui-ux-design-for-inspiration-on-behance-1562344773l8cp4.jpg';
import Project3 from '../../assets/img/landing-page-ui.png';

import './Portfolio.scss';

const projects = [
  {
    title: 'Elysius',
    description: 'Some information about this service. Some extra information.',
    url: 'full-stack-development',
    path: 'full-stack-development',
    image: Project1,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'PRM HR',
    description: 'Some information about this service. Some extra information.',
    url: 'api-integration',
    path: 'api-integration',
    image: Project2,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'UI design and development',
    description: 'Some information about this service. Some extra information.',
    url: 'ui-design-and-development',
    path: 'ui-design-and-development',
    image: Project3,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'full stack development',
    description: 'Some information about this service. Some extra information.',
    url: 'full-stack-development',
    path: 'full-stack-development',
    image: Project1,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'API integration',
    description: 'Some information about this service. Some extra information.',
    url: 'api-integration',
    path: 'api-integration',
    image: Project2,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'full stack development',
    description: 'Some information about this service. Some extra information.',
    url: 'full-stack-development',
    path: 'full-stack-development',
    image: Project1,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'API integration',
    description: 'Some information about this service. Some extra information.',
    url: 'api-integration',
    path: 'api-integration',
    image: Project2,
    stack: 'nodejs, postgresql, reactjs',
  },
  {
    title: 'UI design and development',
    description: 'Some information about this service. Some extra information.',
    url: 'ui-design-and-development',
    path: 'ui-design-and-development',
    image: Project3,
    stack: 'nodejs, postgresql, reactjs',
  },
];

/**
 * Portfolio Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Portfolio />
 * )
 */

function Portfolio() {
  return (
    <PageLoader
      transition="swipeUp"
      delay={0.4}
      InitialScreen={() => <Loader fullscreen />}
    >
      <div className="Portfolio">
        <PageHeader title="Portfolio" description="Trips and conquests." />

        <Container className="section--outside flex flex-wrap jc-center">
          {projects.map((project, index) => {
            return <ProjectCard key={`${project.path}`} project={project} />;
          })}
        </Container>
      </div>
    </PageLoader>
  );
}

export default Portfolio;
