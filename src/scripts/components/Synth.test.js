import React from 'react';
import ReactDOM from 'react-dom';
import Synth from './Synth';
import { shallow } from 'enzyme';


it('shallow render without crashing', () => {
  const div = document.createElement('div');
  shallow(<Synth />);
});


it('tests handling an invalid note change doesnt throw an exception', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<Synth />);
  wrapper.instance().handleNoteChange("x");
});





