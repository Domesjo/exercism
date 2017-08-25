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
        const previousRow = this.rows[i - 1]; // is the previousRow
        const nextRow = [];
        for (let x = 0; x <= previousRow.length; x++) { //x is current index o the nextRow
          if (!previousRow[x]) {
            nextRow.push((previousRow[x] || 0) + (previousRow[x - 1] || 0));
          } else {
            nextRow.push((previousRow[x] || 0) + (previousRow[x + 1] || 0));
          }
        }
        this.rows.push(nextRow);
      }
    }
  }
}

export default Triangle;
