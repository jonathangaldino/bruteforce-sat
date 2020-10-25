export default function buildMakeClause ({ splitAndTrim }) {
  return function makeClause (formula) {
    const variables = [];
    const negatedVariables = [];
    const clauseLiterals = [];

    const cleanedFormula = formula
    .replace("(", "")
    .replace(")", "");

    const cleanedClauses = splitAndTrim(cleanedFormula, "AND");

    cleanedClauses.forEach(literal => {
      if (literal.charAt(0) === '~') {
        negatedVariables.push(literal);
        variables.push(literal.slice(1))
      } else {
        variables.push(literal);
      }

      clauseLiterals.push(literal);
    })

    return Object.freeze({
      getFormula: () => formula,
      getVariables: () => variables,
      getClauseLiterals: () => clauseLiterals,
      getNegatedVariables: () => negatedVariables,
      test: (values) => {
        if (values.length !== clauseLiterals.length) {
          throw Error(`Clause has ${clauseLiterals.length} literals but received ${values.length} values`)
        };

        // console.log({ formula, clauseLiterals, values});

        return values.reduce((acc, value) => acc && value);
      },
    })
  }
}