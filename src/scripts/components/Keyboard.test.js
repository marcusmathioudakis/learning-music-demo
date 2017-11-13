import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './Keyboard';
import { shallow } from 'enzyme';



it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Keyboard />);
});



