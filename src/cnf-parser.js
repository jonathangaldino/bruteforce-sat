
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser() {
    // of course, the use will enter the input later
    const userInput = `(~x AND y) OR (x AND ~z)`;

    console.log('\n')
    console.log(`Expression: ${userInput}`);

    const unparsedClauses = splitAndTrim(userInput, 'OR');

    const clauses = unparsedClauses.map(clause => makeClause(clause));
    
    return clauses;
  }
}
