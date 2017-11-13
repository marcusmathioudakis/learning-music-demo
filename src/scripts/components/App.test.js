import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


it('shallow render without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />);
});



