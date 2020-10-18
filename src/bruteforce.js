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
      let oneClauseWasFalse = false;
      const satisfability = {};

      for(const clause of clauses) {
        const clauseLiterals = clause.getClauseLiterals();
        const values = clauseLiterals.map(literal => table[literalsIndex[literal]][i]);
        const proposition = clause.test(values);

        if (!proposition) {
          oneClauseWasFalse = true;
          break;
        }

        // console.log({ literals: clauseLiterals, values });
        clauseLiterals.forEach((literal, index) => satisfability[literal] = values[index]);
      }

      if (oneClauseWasFalse) {
        break;
      }

      satisfabilities.push(satisfability);
    }

    if (satisfabilities.length) {
      console.log(`Is this expression SAT? A: Yes!`);
      console.table(satisfabilities);
    } else {
      console.log(`Is this expression SAT? A: Sadly, no!`);
    }
  }
}