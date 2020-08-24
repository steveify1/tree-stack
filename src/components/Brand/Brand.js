import React from 'react';
import './Brand.scss';

/**
 * Brand component - for displaying the brand: (simple Component)
 *
 * @component
 * @example
 * return (
 *  <Brand />
 * )
 */
function Brand() {
  return (
    <span data-test="brand" className="Brand">
      <span data-test="content" className="Brand__content">
        NorseTech
      </span>
    </span>
  );
}

export default Brand;
