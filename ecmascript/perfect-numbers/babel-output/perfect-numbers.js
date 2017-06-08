'use strict';

function PerfectNumbers() {}
PerfectNumbers.prototype.classify = function (num) {
  if (num === 1) return 'deficient';
  if (num <= 0) return 'Classification is only possible for natural numbers.';
  var int = num;
  var answer = void 0;
  var temp = 0;
  for (var i = 1; i <= int / 2; i++) {
    if (int % i === 0) temp += i;

    if (temp === int) answer = 'perfect';else {
      temp > int ? answer = 'abundant' : answer = 'deficient';
    }
  }
  return answer;
};

module.exports = PerfectNumbers;