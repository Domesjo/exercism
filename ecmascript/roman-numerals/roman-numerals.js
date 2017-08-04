export default function toRoman(num) {
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
  while (int > 0) {
    if (int - 4 >= 0) {
      if (int - 5 >= 0) {
        ans += inRoman[5];
        int -= 5;
      } else {
        ans += `${inRoman[1]}${inRoman[5]}`;
        int -= 4;
      }
    } else if (int - 1 >= 0) {
      ans += inRoman[1];
      int -= 1;
    }
  }
  return ans;
}
