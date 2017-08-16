class linkedList{
  constructor() {
    this.list = [];
  }

  push(input) {
    this.list.push(input);
  }

  pop() {
    const item = this.list[0];
    this.list.splice(0, 1);
    return item;
  }
}


export default linkedList;
