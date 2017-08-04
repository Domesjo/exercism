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
  const numbers = [1000, 500, 100, 50, 10, 5, 1];
  numbers.forEach((number, index) => {
  //  const nextNumber = numbers[index + 1] || 1;
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

      if(ans.match(/(.)\1\1\1/)) ans = ans.replace(/(.)\1\1\1/, `${inRoman[number]}${inRoman[numbers[index - 1]]}`);
    }
  });
  console.log(ans);
  return ans;
}
toRoman(48);
module.exports = toRoman;
