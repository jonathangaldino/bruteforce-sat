
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser() {
    // of course, the use will enter the input later
    const userInput = `(a OR b) AND (~a OR c) AND (d OR e) AND (f OR g) AND (~f OR ~e)`;

    console.log('\n')
    console.log(`Expression: ${userInput}`);

    const unparsedClauses = splitAndTrim(userInput, 'AND');

    const clauses = unparsedClauses.map(clause => makeClause(clause))  

    return clauses;
  }
}
