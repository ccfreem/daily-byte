import Trie from "./tri";

describe("Trie", () => {
  it("should insert", () => {
    // Arrange
    const words = ["dog"];
    const trie = new Trie();
    words.forEach((w) => trie.insert(w));

    // Act
    const searchForDog = trie.search("dog");
    const searchForDo = trie.search("do");
    const searchForD = trie.search("d");

    // Assert
    expect(searchForDog).toStrictEqual(true);
    expect(searchForDo).toStrictEqual(false);
    expect(searchForD).toStrictEqual(false);
  });
});
