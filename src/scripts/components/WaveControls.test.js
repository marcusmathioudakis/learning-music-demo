import React from 'react';
import ReactDOM from 'react-dom';
import WaveControls from './WaveControls';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WaveControls />, div);
});



