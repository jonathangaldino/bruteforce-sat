import buildMakeCNFParser from './cnf-parser';
import buildMakeClause from './clause';
import { splitAndTrim } from './utils';
import buildMakeTruthTable from './truth-table';

const makeClause = buildMakeClause({ splitAndTrim });
const CNFParser = buildMakeCNFParser({ splitAndTrim, makeClause });

const clauses = CNFParser();

const makeTruthTable = buildMakeTruthTable();

const truthTable = makeTruthTable(clauses);
