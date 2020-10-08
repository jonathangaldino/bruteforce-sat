import buildMakeCNFParser from './cfn-parser';
import buildMakeClause from './clause';
import { splitAndTrim } from './utils';

const makeClause = buildMakeClause({ splitAndTrim });

const CNFParser = buildMakeCNFParser({ splitAndTrim, makeClause });

const clauses = CNFParser();
