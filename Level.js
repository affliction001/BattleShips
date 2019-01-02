class Level {
  constructor(size) {
    this.fieldSize = size;
  }

  createField() {
    const field = [];

    for (let y = 0; y < this.fieldSize; y++) {
      const row = [];
      for (let x = 0; x < this.fieldSize; x++) {
        row.push('0');
      }
      field.push(row);
    }

    return field;
  }

  displayField(arrayField) {
    let displayField = '';

    for (let row = 0; row < arrayField.length; row++) {
      let rowStr = '<tr>';
      for (let cell = 0; cell < arrayField.length; cell++) {
        rowStr += '<td></td>';
      }
      rowStr += '</tr>';
      displayField += rowStr;
    }

    return `<table>${displayField}</table>`;
  }
}
