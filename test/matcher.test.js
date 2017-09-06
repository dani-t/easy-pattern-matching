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
  });
});
