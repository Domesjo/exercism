class Binary {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toDecimal() {
    if (this.decimal.match(/^0+[a-z]*|[a-z]/g)) return 0;

    const ans = this.decimal.split('').forEach((number, i) => {
      console.log(this.decimal);
      return parseInt(number) * Math.pow(2, (this.decimal.length - i));
    });
    console.log(ans);
  }
}

export default Binary;
