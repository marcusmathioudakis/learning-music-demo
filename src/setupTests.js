import WebAudioMock from "web-audio-mock-api"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



const context = WebAudioMock.AudioContext;
global.AudioContext = context;

//configure Enzyme adapter
configure({ adapter: new Adapter() });