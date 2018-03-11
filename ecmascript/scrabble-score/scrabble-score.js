function score(word) {
  if(word) return word.toUpperCase().split('').reduce((sum, val) =>{
    return sum += pickScore(val);
  }, 0);
  return 0;
}

function pickScore(letter) {
  if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)) return 1;
  else if (['D', 'G'].includes(letter)) return 2;
  else if (['B', 'C', 'M', 'P'].includes(letter)) return 3;
  else if (['F', 'H', 'V', 'W', 'Y'].includes(letter)) return 4;
  else if (['K'].includes(letter)) return 5;
  else if (['J', 'X'].includes(letter)) return 8;
  else if (['Q', 'Z'].includes(letter)) return 10;
  return 0;
}
module.exports = score;
 
