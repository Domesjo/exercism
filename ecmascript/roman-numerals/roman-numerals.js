export default function toRoman(int) {
  let ans = '';
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
    if (int - 1 >= 0) {
      ans += inRoman[1];
      console.log(int);
      int -= 1;
    }
  }
  return ans;
}
