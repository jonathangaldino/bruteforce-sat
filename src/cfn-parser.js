import buildMakeClause from "./clause";
import { splitAndTrim } from './utils';

export default function CNFParser () {
  const userInput = `(~a OR b) AND (a OR c)`;

  const makeClause = buildMakeClause({ splitAndTrim }); 

  const unparsedClauses = splitAndTrim(userInput, 'AND');

  const clauses = unparsedClauses.map(clause => makeClause(clause))  

  clauses.forEach(clause => console.log(clause.existsNegatedBariables()));
  
  return clauses;
}

