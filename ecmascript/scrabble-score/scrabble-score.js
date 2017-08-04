function score(word) {
  return word.map(pickScore());
}

function pickScore(letter) {
  if(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)) return 1;
  else if(['D', 'G' ].includes(letter)) return 2;
  else if(['B', 'C', 'M', 'P'].includes(letter)) return 3;
  else if(['F', 'H', 'V', 'W', 'Y'].includes(letter)) return 4;
  else if(['K'].includes(letter)) return 5
  else if(['J', 'X'].includes(letter)) return 8;
  else return 10;
}
module.exports = score;
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
