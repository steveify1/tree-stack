import React from 'react';

function ResponsiveImage({ src, alt, className, ref }) {
  return (
    <div ref={ref} className={`img img--responsive ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ResponsiveImage;
