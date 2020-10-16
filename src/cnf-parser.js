
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser() {
    // of course, the use will enter the input later
    const userInput = `(a AND b AND c)`;

    const unparsedClauses = splitAndTrim(userInput, 'OR');

    const clauses = unparsedClauses.map(clause => makeClause(clause))  

    return clauses;
  }
}
