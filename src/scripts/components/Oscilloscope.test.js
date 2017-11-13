import React from 'react';
import ReactDOM from 'react-dom';
import Oscilloscope from './Oscilloscope';
import { shallow } from 'enzyme';



it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Oscilloscope />);
});
