
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser() {
    // of course, the use will enter the input later
    const userInput = `(p OR q) AND (p OR ~q) AND (~p OR ~q OR ~r) AND (~p OR r)`;

    console.log('\n')
    console.log(`Expression: ${userInput}`);

    const unparsedClauses = splitAndTrim(userInput, 'AND');

    const clauses = unparsedClauses.map(clause => makeClause(clause));

    return clauses;
  }
}
