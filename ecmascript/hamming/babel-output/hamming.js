'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Hamming = function Hamming() {};
Hamming.prototype.compute = function (dna1, dna2) {
  if (dna1.length !== dna2.length) throw new Error('DNA strands must be of equal length.');
  var score = 0;
  var base = dna1.split('');
  base.forEach(function (str, i) {
    if (dna2.charAt(i) !== str) score++;
  });
  console.log(score);
  return score;
};
console.log(Hamming);
exports.default = Hamming;