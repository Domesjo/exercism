class Triangle{
  constructor(rowsNumber) {
    this.amountOfRows = rowsNumber; // sets the number of Rows
    this.rows = [];
    this.createTriangle();
  }

  createTriangle() {
    for (let i = 0; i < this.amountOfRows; i++) { // i is what row it is starting from the top
      if (i === 0) { // if there are no rows
        this.rows.push([1]); // if no rows created push first
      } else {
        // takes the previous row to know how many intergers there should be in the next row
        const nextRow = [];
        for (let x = 0; x <= this.rows[i - 1].length; x++) {
          nextRow.push(this.rows[i + 1] + this.rows[i]);
        }
        this.rows.push(nextRow);
      }
    }
  }
}

export default Triangle;
