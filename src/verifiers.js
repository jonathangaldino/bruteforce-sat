export default function buildMakeVerifier({ }) {
  return function makeVerifier(clauses, values) {
    let response = `Nope! It's not SAT.`;

    for(const clause of clauses) {
      const clauseLiterals = clause.getClauseLiterals();
      const clauseValues = clauseLiterals.map(literal => {
        if (literal.charAt(0) === "~") {
          return !values[literal.slice(1)];
        }

        return values[literal];
      });
      
      const proposition = clause.test(clauseValues);

      if (proposition) {
        response = 'Yes! It is SAT.'
      }
    }

    console.log('Result: ', response);
  }
}