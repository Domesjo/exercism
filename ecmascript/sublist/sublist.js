export default class List {
  constructor(arr) {
    this.arr = arr || [];
  }

  compare(arr) {
    if (this.arr.every((val, index) => val === arr[index])) return 'EQUAL';
    return 'UNEQUAL';
  }
}
