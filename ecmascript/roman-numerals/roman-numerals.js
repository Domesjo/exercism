function toRoman(num) {
  let ans = '';
  let int = num;
  const inRoman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };
  const numbers = [1, 5, 10, 50, 100, 500, 1000].reverse();
  while (int > 0) {
    numbers.forEach((number, index) => {
      if (int - (number - 1) >= 0 && int > 0) {
        if (int - number >= 0) {
          ans += inRoman[number];
          int -= number;
        } else {
          ans += `${inRoman[numbers[index + 1]]}${inRoman[number]}`;
          int -= number - 1;
        }
      }
    });
  }
  return ans;
}

module.exports = toRoman;
