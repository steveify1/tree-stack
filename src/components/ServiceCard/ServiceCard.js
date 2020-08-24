import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import './ServiceCard.scss';

function ServiceCard({ service = {} }) {
  return (
    <div className="card rounded ServiceCard flex flex-column ai-center">
      <header className="card__header ta-center">
        {service.icon || <FaBookOpen className="icon" />}
        <h2 className="mega card__title">{service.title}</h2>
      </header>

      <p className="mini ta-center">
        {service.description}{' '}
        <Link to={`/services/${service.path}`}>Learn more</Link>
      </p>

      <Link
        to={`/contact?service=${service.path}`}
        className="btn btn--sm btn--full-wi btn--secondary btn--shadow"
      >
        Get started
      </Link>
    </div>
  );
}

export default ServiceCard;
