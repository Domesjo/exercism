class Binary {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toDecimal() {
    if (!this.decimal.match(/^[1-9][0-9]*$|^00+[0-9]*/g)) return 0;

    const ans = this.decimal.split('').map((number, i) => {
      return parseInt(number) * Math.pow(2, (this.decimal.length - (i + 1)));
    });

    return ans.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
  }
}

export default Binary;
