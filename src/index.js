import buildMakeCNFParser from './cnf-parser';
import buildMakeClause from './clause';
import { splitAndTrim, extractVariablesFromClauses } from './utils';
import buildMakeTruthTable from './truth-table';

const makeClause = buildMakeClause({ splitAndTrim });
const CNFParser = buildMakeCNFParser({ splitAndTrim, makeClause });

const clauses = CNFParser();

const makeTruthTable = buildMakeTruthTable({ extractor: extractVariablesFromClauses });

const truthTable = makeTruthTable(clauses);
