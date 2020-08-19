import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaBookOpen, FaList, FaPen } from 'react-icons/fa';
import Container from '../../layouts/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import HScrollSlide from '../../components/HScrollSlide/HScrollSlide';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    className: 'Container',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Portfolio">
      <PageHeader title="Portfolio" description="Trips and conquests." />

      <Container className="section--outside flex flex-wrap jc-center">
        {projects.map((project, index) => {
          return <ProjectCard key={`${project.path}`} project={project} />;
        })}
      </Container>
    </div>
  );
}

export default Portfolio;
