const match = value => (...caseModels) => {
  const v = caseModels.find(caseModel => {
    const exp = caseModel.expressionToTest;
    if (typeof exp === "string") {
      return exp === value;
    } else if (typeof exp === "function") {
      return exp(value);
    }
  }).returnValue;
  if (typeof v === "string") {
    return v;
  } else if (typeof v === "function") {
    return v(value);
  }
};
