export default function inputParser () {
  const userInput = `(!a OR b OR c) AND (!c OR d) AND (!c OR !d)`;
  let variables = [];
  let negatedVariables = [];

  const clauses = splitAndTrim(userInput, 'AND');

  clauses.forEach(clause => {
    let cleanedClause = clause
      .replace("(", "")
      .replace(")", "");

    const literals = splitAndTrim(cleanedClause, "OR");

    literals.forEach(literal => {
      const length = literal.length; // if length 2, is probably negated as: !c !d and !e

      if (length === 2) {
        negatedVariables.push(literal);
        variables.push(literal.charAt(1))
      }
    })
  });

  return {variables, negatedVariables};
}

function splitAndTrim(string, separator) {
  return string.split(separator).map(item => item.trim());
}
