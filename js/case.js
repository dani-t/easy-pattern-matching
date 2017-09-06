class CaseModel {
  constructor(expressionToTest, returnValue) {
    this.expressionToTest = expressionToTest;
    this.returnValue = returnValue;
  }
}

function Case(expressionToTest, returnValue) {
  return new CaseModel(expressionToTest, returnValue);
}
