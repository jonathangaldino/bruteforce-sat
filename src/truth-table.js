export default function buildMakeTruthTable({ extractor }) {
  return function makeTruthTable(clauses) {
    const { literals, negatedLiterals } = extractor(clauses);
    const tableLiterals = [...literals];

    const n = literals.length;
    let combinations = Math.pow(2, n);
    let table = new Array(n);
    let limiter = combinations / 2;
    let value = true;
 
    for(let i = 0; i < n; i++) {
      let counter = 0;
      table[i] = new Array(combinations);

      for(let j = 0; j < combinations; j++) {
        if (counter < limiter) {
          table[i][j] = value;
          counter += 1;
        } 

        if (counter === limiter) {
          value = !value;
          counter = 0;
        }
      }
      limiter = limiter / 2;
    }

    negatedLiterals.forEach(negatedLiteral => {
      tableLiterals.push(negatedLiteral);
      const negatedLiteralColumn = new Array(combinations);
      const positiveLiteralIndex = tableLiterals.findIndex(literal => literal === negatedLiteral.charAt(1))
      
      for(let k = 0; k < combinations; k++) {
        negatedLiteralColumn[k] = !table[positiveLiteralIndex][k];
      }

      table.push(negatedLiteralColumn);
    })

    return Object.freeze({
      getTable: () => table,
      getTableRowsCount: () => combinations, 
      getTableLiterals: () => tableLiterals,
      findLiteralIndex: (literal) => tableLiterals.findIndex(tableLiteral => tableLiteral === literal),
    })
  }
}