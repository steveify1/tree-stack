import React from 'react';
import Container from '../../layouts/Container/Container';
import './PageHeader.scss';

function PageHeader({ title, description }) {
  return (
    <header className="page__header">
      <Container>
        <h1 className="headline mega">{title}</h1>
        {description && <p className="millo color--secondary">{description}</p>}
      </Container>
    </header>
  );
}

export default PageHeader;
