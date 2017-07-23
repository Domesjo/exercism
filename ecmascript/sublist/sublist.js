export default class List {
  constructor(arr) {
    this.arr = arr || [];
  }

  length() {
    return this.arr.length;
  }

  compare(arr) {
    if (this.arr.every((val, index) => val === arr[index]) && this.arr.length === arr.length()) return 'EQUAL';
    if (this.arr.every((val, index) => arr[index].includes(val) || (this.arr.length === 0 && arr.length() >= 1))) return 'SUBLIST';
    return 'UNEQUAL';
  }
}
