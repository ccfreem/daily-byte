import countPrimesLessThanN from "./index";

describe("it should count prime numbers", () => {
  it("should return 1 from 3", () => {
    // 2 is the only prime number less than 3
    expect(countPrimesLessThanN(3)).toBe(1);
  });

  it("should find 3 from 7", () => {
    // 2, 3, and 5 are the only prime numbers less than 7.
    expect(countPrimesLessThanN(7)).toBe(3);
  });
});
