const match = value => (...caseModels) =>
  caseModels.find(caseModel => caseModel.test(value)).result(value);
