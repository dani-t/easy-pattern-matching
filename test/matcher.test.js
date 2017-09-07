describe("match", () => {
  describe("basic", () => {
    it('result must be "X"', () => {
      expect(match("x")(Case("x", "X"), Case("y", "Y"))).toBe("X");
    });

    it('result must not be "X"', () => {
      expect(match("y")(Case("x", "X"), Case("y", "Y"))).toBe("Y");
    });

    it('result must be "Y"', () => {
      expect(match("y")(Case("x", "X"), Case("y", "Y"))).toBe("Y");
    });

    it('result for input expression as function must be "Y"', () => {
      expect(
        match("y")(Case("x", "X"), Case(value => value === "y", "Y"))
      ).toBe("Y");
    });

    it('result for input expression as function and result as function must be "Yy"', () => {
      expect(
        match("y")(
          Case("x", "X"),
          Case(value => value === "y", value => "Y" + value)
        )
      ).toBe("Yy");
    });

    it('result for input number 5 output string 5 must be "5"', () => {
      expect(
        match(5)(
          Case(5, "5"),
          Case(value => value === "y", value => "Y" + value)
        )
      ).toBe("5");
    });

    it('result for input number 5 output number 4 must be "4"', () => {
      expect(
        match(5)(
          Case(5, 4),
          Case(value => value === "y", value => "Y" + value)
        )
      ).toBe(4);
    });

    it('result for input null must be "other branch"', () => {
      expect(
        match(null)(
          Case(5, 4),
          Case(value => value === "y", value => "Y" + value),
          Case(other(), "other branch")
        )
      ).toBe("other branch");
    });

    it('result for input "bla" must be "other branch"', () => {
      expect(
        match("bla")(
          Case(5, 4),
          Case(value => value === "y", value => "Y" + value),
          Case(other(), "other branch")
        )
      ).toBe("other branch");
    });
  });
});
