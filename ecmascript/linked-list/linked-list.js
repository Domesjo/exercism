class linkedList {
  constructor() {
    this.list = [];
  }

  push(input) {
    this.list.push(input);
  }

  pop() { // removes the last element from an array
    const item = this.list[this.list.length - 1];
    this.list.splice(this.list.length - 1, 1);
    return item;
  }

  shift() {
    const item = this.list[0]; // is always gonna remove the first item;
    this.list.splice(0, 1);
    return item;
  }

  unshift(input) {
    return this.list.splice(0, 0, input); // inserts an item on the first index of the array
  }
}


export default linkedList;
