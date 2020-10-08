export default function buildMakeClause ({ splitAndTrim }) {
  return function makeClause (formula) {
    const variables = [];
    const negatedVariables = [];

    const cleanedFormula = formula
    .replace("(", "")
    .replace(")", "");

    const literals = splitAndTrim(cleanedFormula, "OR");

    literals.forEach(literal => {
      // if length 2, is probably negated
      const length = literal.length; 

      if (length === 2) {
        negatedVariables.push(literal);
        variables.push(literal.charAt(1))
      }
    })
    
    return Object.freeze({
      getFormula: () => formula,
      getVariables: () => variables,
      getVariablesCount: () => variables.length,
      getNegatedVariables: () => negatedVariables,
      existsNegatedBariables: () => negatedVariables.length > 0
    })
  }
}