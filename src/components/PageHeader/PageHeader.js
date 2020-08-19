import React from 'react';
import './PageHeader.scss';

function PageHeader({ title, description }) {
  return (
    <header className="page__header">
      <h1 className="headline headline--3">{title}</h1>
      {description && <p className="kilo color--secondary">{description}</p>}
    </header>
  );
}

export default PageHeader;
