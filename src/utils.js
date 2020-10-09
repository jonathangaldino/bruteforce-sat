export function splitAndTrim(string, separator) {
  return string.split(separator).map(item => item.trim());
}

export function extractVariablesFromClauses(clauses) {
  const literals = new Set();
  const negatedLiterals = new Set();

  clauses.forEach(clause => {
    const variables = clause.getVariables();
    const negatedVaribles = clause.getNegatedVariables();

    variables.forEach(variable => literals.add(variable));
    negatedVaribles.forEach(variable => negatedLiterals.add(variable));
  });

  return {
    literals: Array.from(literals),
    negatedLiterals: Array.from(negatedLiterals)
  }
}