import inquirer from 'inquirer';
import buildMakeClause from './clause';
import { splitAndTrim, extractVariablesFromClauses } from './utils';
import buildMakeCNFParser from './cnf-parser';
import buildMakeVerifier from './verifiers';
import buildMakeTruthTable from './truth-table';
import buildMakeSolver from './solver';
import buildMakeSATBruteforce from './bruteforce';

const makeClause = buildMakeClause({ splitAndTrim });
const CNFParser = buildMakeCNFParser({ splitAndTrim, makeClause });
const verifier = buildMakeVerifier({ extractor: extractVariablesFromClauses });
const makeTruthTable = buildMakeTruthTable({ extractor: extractVariablesFromClauses });
const SATBruteforce = buildMakeSATBruteforce();
const solver = buildMakeSolver({ makeTruthTable, SATBruteforce });

(async () => {
  const { algorithm, expression } = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'algorithm',
      message: 'Which algorithm do you want to execute?',
      choices: ['bruteforce','verifier']
    },
    {
      type: 'input',
      name: 'expression',
      message: 'Enter a valid expression:'
    }
  ]);
  
  const clauses = CNFParser(expression);

  if (algorithm === 'verifier') {
    const { literals } = extractVariablesFromClauses(clauses);

    const questions = literals.map(literal => ({
      type: 'input',
      name: literal,
      message: `Enter a value for ${literal}:`,
      filter: (answer) => !!answer
    }));

    const variablesPlusValues = await inquirer.prompt(questions);

    console.time('Execution Time');
    verifier(clauses, variablesPlusValues);
    console.timeEnd('Execution Time');
  } else {
    solver(clauses);
  }
})()
