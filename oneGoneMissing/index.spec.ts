import missingNumber from './index'

describe("Missing nums", () => {
  it("should return the missing number for first example", () => {
    expect(missingNumber([1, 4, 2, 0])).toEqual(3);
  });
  it("should return the missing number for second example", () => {
    expect(missingNumber([6, 3, 1, 2, 0, 5])).toEqual(4);
  });
});
