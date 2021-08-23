import complimentaryNumber from './index'

describe("Complementary number", () => {
  it("should find complement", () => {
    const compliment = complimentaryNumber(27);
    expect(compliment).toEqual(4);
  });
});
