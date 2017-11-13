import React from 'react';
import ReactDOM from 'react-dom';
import Synth from './Synth';
import { shallow } from 'enzyme';


it('shallow render without crashing', () => {
  const div = document.createElement('div');
  shallow(<Synth />);
});



