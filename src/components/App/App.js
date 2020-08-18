import React from 'react';
import './App.scss';
import Layouts from '../../layouts';

/**
 * App component - represents the entire application: (root Component)
 *
 * @component
 */
function App() {
  return (
    <div data-test="app" className="App">
      <Layouts />
    </div>
  );
}

export default App;
