class WordProblem {
  constructor(question) { // sets the question
    this.question = question;
    this.operator = {
      plus: '+',
      minus: '-',
      multiplied: '*',
      divided: '/',
    };
  }

  answer() {
    let ans = '';
    this.question.match(/-*[0-9]|plus|minus|multiplied|divided/g).forEach((val) => {
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

module.exports = { WordProblem };
