export default function buildMakeTruthTable() {
  return function makeTruthTable(clauses) {
    const tableLiterals = [];

    clauses.forEach(clause => {
      const variables = [...clause.getVariables(), ...clause.getNegatedVariables()];
      
      variables.forEach(variable => {
        let exists = tableLiterals.find(literal => literal === variable);

        if (!exists) {
          tableLiterals.push(variable);
        }
      })
    });

  }
}