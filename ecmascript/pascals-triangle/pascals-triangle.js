class Triangle{
  constructor(rowsNumber) {
    this.amountOfRows = rowsNumber; // sets the number of Rows
    this.rows = [];
    this.createTriangle();
  }

  createTriangle() {
    for (let i = 0; i < this.amountOfRows; i++) {
      if (this.rows.length === 0) this.rows.push([1]); // if no rows created push first
    }
  }
}

export default Triangle;
