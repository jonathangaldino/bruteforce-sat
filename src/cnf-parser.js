
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser() {
    // of course, the use will enter the input later
    const userInput = `(a OR b) AND (c OR ~a)`;

    const unparsedClauses = splitAndTrim(userInput, 'AND');

    const clauses = unparsedClauses.map(clause => makeClause(clause))  

    return clauses;
  }
}
