import React from 'react';
import './NotFound.scss';
import Section from '../../layouts/Section/Section';
import imgSrc from '../../assets/svg/page-not-found.svg';
/**
 * NotFound component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <NotFound />
 * )
 */
function NotFound() {
  return (
    <div className="NotFound">
      <Section>
        <div className="NotFound__content" data-test="not-found">
          <img
            className="NotFound__img"
            src={imgSrc}
            alt="not-found"
            aria-label="404 not found"
          />
        </div>
      </Section>
    </div>
  );
}

export default NotFound;
