'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      var response = {
        '?': 'Sure.',
        '!': 'Whoa, chill out!',
        b: 'Fine. Be that way!',
        catch: 'Whatever.'
      };

      if (!message || message.trim().length === 0) return response.b;
      var respo = response.catch;
      var action = message.charAt(message.length - 1).toString();
      var res = ['?', '!', 'b'];
      if (res.includes(action)) {
        if (res[res.indexOf(action)] === '!' && message[2] !== message[2].toUpperCase()) return response.catch;else if (res[res.indexOf(action)] === '?' && message.length < 3) return response['?'];else if (message === message.toUpperCase() && !parseInt(message)) return respo = response['!'];else {
          respo = response[action];
        }
      }
      if (message === message.toUpperCase() && !res.includes(action) && String(message) && !parseInt(message)) return response['!'];
      // if(parseInt(message)) return response.catch;
      return respo;
    }
  }]);

  return Bob;
}();

exports.default = Bob;