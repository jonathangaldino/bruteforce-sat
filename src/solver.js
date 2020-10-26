export default function buildMakeSolver ({ makeTruthTable, SATBruteforce }) {
  return function makeSolver(clauses) {
    console.time('Execution Time');

    const truthTable = makeTruthTable(clauses);
    SATBruteforce(truthTable, clauses);

    console.timeEnd('Execution Time');
  }
}