class Matrix {
  constructor(input) {
    this.input = input;
    this.setRows();
    this.setColumns();
  }

  setRows() {
    this.rows = [];
    this.input.split('\n').forEach((row) => {
      this.rows.push(row.split(' ').map(val => parseInt(val)));
    });
    return this.rows;
  }

  setColumns() {
    this.columns = [];
    for (let i = 0; i < this.rows.length; i++) {
      this.columns.push([]);
      this.rows.forEach(row => {
        this.columns[i].push(row[i]);
      });
    }
  }

}

export default Matrix;
