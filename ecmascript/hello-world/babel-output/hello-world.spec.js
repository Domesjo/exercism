'use strict';

var _helloWorld = require('./hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hello World', function () {
  it('says hello', function () {
    expect((0, _helloWorld2.default)()).toEqual('Hello, World!');
  });
});