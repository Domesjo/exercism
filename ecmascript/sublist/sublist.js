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
    else if (this.arr.every(val => arr.includes(val) || (this.arr.length === 0 && arr2.length() >= 1))) return 'SUBLIST';
    else if (arr.every(val => this.arr.includes(val) || (arr.length === 0 && this.arr.length >= 1))) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}
