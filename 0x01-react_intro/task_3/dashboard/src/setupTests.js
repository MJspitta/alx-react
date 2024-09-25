global.TextEncoder = global.TextEncoder || require('util').TextEncoder;
global.TextDecoder = global.TextDecoder || require('util').TextDecoder;
global.fetch = require('node-fetch');


import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';


Enzyme.configure({ adapter: new Adapter() });