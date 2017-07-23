export default class List {
  constructor(arr) {
    this.arr = arr || [];
  }

  length() {
    return this.arr.length;
  }

  compare(arr) {
    if (this.arr.every((val, index) => val === arr[index]) && this.arr.length === arr.length()) return 'EQUAL';
    return 'UNEQUAL';
  }
}
