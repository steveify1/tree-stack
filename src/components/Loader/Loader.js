import React from 'react';
import { MoonLoader } from 'react-spinners';
import Brand from '../Brand/Brand';
import './Loader.scss';

function Loader({ showBrand, fullscreen, className }) {
  return (
    <div
      className={`Loader grid jc-center ai-center ta-center ${
        fullscreen ? 'Loader--fullscreen' : ''
      } ${className}`}
    >
      <div className="grid jc-center ai-center ta-center">
        {showBrand && <Brand />}
        <div className="flex jc-center">
          <MoonLoader size={30} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
