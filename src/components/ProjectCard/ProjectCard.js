import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './ProjectCard.scss';

function ProjectCard({ project = {} }) {
  return (
    <div className="ProjectCard flex flex-column ai-center">
      <div className="card__wrapper">
        <header className="ta-center">
          <ResponsiveImage src={project.image} alt={project.title} />
        </header>

        <section className="card__body flex flex-column jc-center ai-center ta-center">
          <p className="micro project__stack">{project.stack}</p>
          <h2 className="kilo card__title">{project.title}</h2>
          <p className="mini ">
            {project.description}{' '}
            <Link to={`/portfolio/${project.path}`}>Learn more</Link>
          </p>

          <Link
            to={project.url}
            className="btn btn--sm btn--full-widt btn--primary btn--shadow"
          >
            Visit site
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ProjectCard;
