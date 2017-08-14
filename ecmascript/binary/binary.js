class Binary {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toDecimal() {
    if (this.decimal.match(/^0+[a-z]*|[a-z]/g)) return 0;

    const ans = this.decimal.split('').map((number, i) => {
      return parseInt(number) * Math.pow(2, (this.decimal.length - (i + 1)));
    });
    return parseInt(ans.join(''));
  }
}

export default Binary;
