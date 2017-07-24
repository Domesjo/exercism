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
    else if ((this.arr.some((val, index) => {
      if (arr.includes(val)) {
        const i = arr.indexOf(val); // i cannot be first index nad index can not be last
        const isFirstAndLast = i !== 0 && index + 1 !== (this.arr.length - 1);
        return ((this.arr[index + 1] && arr[i + 1] && arr[i + 1] === this.arr[index + 1] && isFirstAndLast) || (arr[i + 1] === this.arr[index + 1] && arr[i + 2] && this.arr[index + 2] && arr[i + 2] === this.arr[index + 2]));
      }
      return false;
    }) && this.arr.slice(0, arr2.length()).toString() !== arr.toString()) || (this.arr.length === 0 && arr2.length() >= 1)) return 'SUBLIST';
    else if (arr.some((val, index) => {
      if (this.arr.includes(val)) {
        const i = this.arr.indexOf(val);
        const isFirstAndLast = index !== 0 && i + 1 !== (arr.length - 1);

        return ((this.arr[i + 1] && arr[index + 1] && arr[index + 1] === this.arr[i + 1] && isFirstAndLast) || (arr[index + 1] === this.arr[i + 1] && arr[index + 2] && this.arr[i + 2] && arr[index + 2] === this.arr[index + 2]));
      }
      return false
    }) || (arr.length === 0 && this.arr.length >= 1)) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}
