class WordProblem {
  constructor(question) { // sets the question
    this.question = question;
    this.operator = {
      plus: '+',
      minus: '-',
    };
  }

  answer() {
    let ans = '';
    this.question.match(/-*[0-9]|plus|minus/g).forEach((val) => {
      if (this.operator[val]) {
        ans += this.operator[val];
      } else {
        ans += val;
      }
    });
    return eval(ans);
  }
}

module.exports = { WordProblem };
