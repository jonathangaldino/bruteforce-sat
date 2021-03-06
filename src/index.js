import buildMakeCNFParser from './cnf-parser';
import buildMakeClause from './clause';
import { splitAndTrim, extractVariablesFromClauses } from './utils';
import buildMakeTruthTable from './truth-table';
import buildMakeSATBruteforce from './bruteforce';

console.time('Execution Time');
const makeClause = buildMakeClause({ splitAndTrim });
const CNFParser = buildMakeCNFParser({ splitAndTrim, makeClause });

const clauses = CNFParser();

const makeTruthTable = buildMakeTruthTable({ extractor: extractVariablesFromClauses });

const truthTable = makeTruthTable(clauses);

const SATBruteforce = buildMakeSATBruteforce();

SATBruteforce(truthTable, clauses);

console.timeEnd('Execution Time');
console.log('\n')
