'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Transcriptor = function Transcriptor() {
  this.toRna = function (letter) {
    var outPut = [];
    var dna = letter;
    var trans = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };
    if (!Object.keys(trans).includes(letter[0])) throw new Error('Invalid input DNA.');
    if (letter.length === 1) return trans[dna];else if (letter.length > 1) {
      dna.split('').map(function (str) {
        if (!Object.keys(trans).includes(str)) throw new Error('Invalid input DNA.');
        outPut.push(trans[str]);
      });
    }
    return outPut.join('');
  };
};

exports.default = Transcriptor;