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
  numbers.forEach((number, index) => {
    while (int > 0) {
      if (int - (number - 1) >= 0) {
        if (int - number >= 0) {
          ans += inRoman[number];
          int -= number;
        } else {
          ans += `${inRoman[1]}${inRoman[number]}`;
          int -= number - 1;
        }
      } else {
        break;
      }
    }
  });
  return ans;
}
toRoman(9)
module.exports = toRoman;
