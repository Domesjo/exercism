'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transcriptor = function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);

    this.trans = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };
  }

  _createClass(Transcriptor, [{
    key: 'toRna',
    value: function toRna(str) {
      var _this = this;

      if (!str.match(/^[G|C|A|T]+$/g)) throw Error("Invalid input DNA.");
      return str.match(/G|C|A|T/g).map(function (rna) {
        return _this.trans[rna];
      }).join('');
    }
  }]);

  return Transcriptor;
}();
// let t = new Transcriptor();
// console.log(t.toRna('C'));


exports.default = Transcriptor;