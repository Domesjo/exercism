export default class List {
  constructor(arr) {
    this.arr = arr || [];
  }

  length() {
    return this.arr.length;
  }

  compare(arr2) {
    const arr = arr2.arr;
    if (this.arr.every((val, index) => val === arr[index]) && this.arr.length === arr2.length()) return 'EQUAL';
    else if (arr.every(val => this.arr.includes(val) || (arr.length === 0 && this.arr.length >= 1))) return 'SUPERLIST';
    else if (this.arr.some((val, index) => {
      if (arr.includes(val)) {
        const i = arr.indexOf(val);
        return (arr[i + 1] === this.arr[index + 1] && i !== 0 && this.arr.indexOf(this.arr[index + 1] !== (this.arr.length - 1)));
      }
      return false;
    }) || (this.arr.length === 0 && arr2.length() >= 1)) return 'SUBLIST';
    return 'UNEQUAL';
  }
}
