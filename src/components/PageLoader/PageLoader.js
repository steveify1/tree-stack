import React, { useState, useEffect } from 'react';
import './PageLoader.scss';

function PageLoader({ children, transition, delay = 1, InitialScreen }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, delay * 1000);

    return () => {
      setLoad(false);
    };
  }, [delay]);

  return (
    <div className="PageLoader__parent">
      {InitialScreen && load === false ? <InitialScreen /> : null}
      <div
        className={`PageLoader ${transition} ${load ? 'PageLoader--load' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}

export default PageLoader;
