import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaBookOpen, FaList, FaPen } from 'react-icons/fa';
import Container from '../../layouts/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.scss';

const services = [
  {
    title: 'full stack development',
    description: 'Some information about this service. Some extra information.',
    path: 'full-stack-development',
  },
  {
    title: 'API integration',
    description: 'Some information about this service. Some extra information.',
    path: 'api-integration',
  },
  {
    title: 'UI design and development',
    description: 'Some information about this service. Some extra information.',
    path: 'ui-design-and-development',
  },
  {
    title: 'system design and architecture',
    description: 'Some information about this service. Some extra information.',
    path: 'system-design-and-architecture',
  },
  {
    title: 'devops and automation',
    description: 'Some information about this service. Some extra information.',
    path: 'devops-and-automation',
  },
];

/**
 * Services Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Services />
 * )
 */

function Services() {
  return (
    <div className="Services">
      <PageHeader
        title="Services"
        description="Design and build anything that lives on the web."
      />

      <Container className="section--outside flex flex-wrap jc-center">
        {services.map((service, index) => {
          return <ServiceCard key={`${service.path}`} service={service} />;
        })}
      </Container>

      <section className="banner bg--secondar section--outside">
        <Container>{/* <h2>Learn how we work</h2> */}</Container>
      </section>
    </div>
  );
}

export default Services;
