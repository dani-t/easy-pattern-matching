class CaseModel {
  constructor(expressionToTest, returnValue) {
    this.expressionToTest = expressionToTest;
    this.returnValue = returnValue;
  }

  test(value) {
    const exp = this.expressionToTest;
    if (typeof exp === "string" || typeof exp === "number") {
      return exp === value;
    } else if (typeof exp === "function") {
      return exp(value);
    } else if (exp instanceof Other) {
      return true;
    } else {
      throw new Error("Matcher: Unrecognized expressionToTest type");
    }
  }

  result(value) {
    const v = this.returnValue;
    if (typeof v === "string" || typeof v === "number") {
      return v;
    } else if (typeof v === "function") {
      return v(value);
    } else {
      throw new Error("Matcher: Unrecognized returnValue type");
    }
  }
}

function Case(expressionToTest, returnValue) {
  return new CaseModel(expressionToTest, returnValue);
}
