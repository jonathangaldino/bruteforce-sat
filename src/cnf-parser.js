
export default function buildMakeCNFParser ({ splitAndTrim, makeClause }) {
  return function makeCNFParser(input) {
    // of course, the use will enter the input later
    const userInput = `(~x AND y) OR (x AND ~z)`;

    // console.log('\n')
    // console.log(`Expression: ${input}`);

    const unparsedClauses = splitAndTrim(input || userInput, 'OR');

    const clauses = unparsedClauses.map(clause => makeClause(clause));
    
    return clauses;
  }
}
