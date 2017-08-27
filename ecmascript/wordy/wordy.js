function ArgumentError(message) {
  this.name = 'ArgumentError';
  this.message = message || 'Invalid input provided';
}
class WordProblem {
  constructor(question) { // sets the question
    this.question = question;
    this.operator = {
      plus: '+',
      minus: '-',
      multiplied: '*',
      divided: '/',
    };
    this.matches = this.question.match(/-*[0-9]|plus|minus|multiplied|divided/g);
  }

  answer() {
    let ans = '';
    console.log(this.matches.some(val => this.operator[val]));
    if (!this.matches || !this.matches.some(val => this.operator[val])) throw new ArgumentError('bruuh');
    this.matches.forEach((val) => {
      if (this.operator[val]) {
        ans += this.operator[val];
      } else {
        ans += val;
      }
    });
    ans = ans.replace(/--/, '+'); // replaces the -- with points to decrase to a + instead
    return eval(ans);
  }
}
module.exports = { WordProblem, ArgumentError };
