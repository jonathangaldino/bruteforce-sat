export default function buildMakeSATBruteforce() {
  return function makeSATBruteforce(truthTable, clauses) {
    const tableLiterals = truthTable.getTableLiterals();
    const table = truthTable.getTable();

    const literalsIndex = {};

    tableLiterals.forEach(literal => {
      literalsIndex[literal] = truthTable.findLiteralIndex(literal);
    });


    const combinations = truthTable.getTableRowsCount();
    const satisfabilities = [];

    // i iterates each row of the truth table
    for (let i = 0; i < combinations; i++) {
      const satisfability = {};

      for(const clause of clauses) {
        const clauseLiterals = clause.getClauseLiterals();
        const values = clauseLiterals.map(literal => table[literalsIndex[literal]][i]);
        const proposition = clause.test(values);

        clauseLiterals.forEach((literal, index) => satisfability[literal] = values[index]);

        if (proposition) {
          satisfabilities.push(satisfability);
        }
      }

    }

    if (satisfabilities.length) {
      console.log(`Is this expression SAT?\nA: Yes! Of ${combinations} combinations found ${satisfabilities.length} that will make this expression truthy.`);
      console.table(satisfabilities);
    } else {
      console.log(`Is this expression SAT?\nA: Sadly, no!`);
    }
  }
}