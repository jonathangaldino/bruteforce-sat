export default function buildMakeClause ({ splitAndTrim }) {
  return function makeClause (formula) {
    const variables = [];
    const negatedVariables = [];

    const cleanedFormula = formula
    .replace("(", "")
    .replace(")", "");

    const cleanedClauses = splitAndTrim(cleanedFormula, "AND");

    cleanedClauses.forEach(cleanedClause => {
      // if length 2, is probably negated
      const length = cleanedClause.length;

      if (length === 2) {
        negatedVariables.push(cleanedClause);
        variables.push(cleanedClause.charAt(1))
      } else {
        variables.push(cleanedClause)
      }
    })

    const clauseLiterals = [...variables, ...negatedVariables];

    return Object.freeze({
      getFormula: () => formula,
      getVariables: () => variables,
      getClauseLiterals: () => clauseLiterals,
      getNegatedVariables: () => negatedVariables,
      test: (values) => {
        if (values.length !== clauseLiterals.length) {
          throw Error(`Clause has ${clauseLiterals.length} literals but received ${values.length} values`)
        };

        return values.reduce((acc, value) => acc && value);
      },
    })
  }
}