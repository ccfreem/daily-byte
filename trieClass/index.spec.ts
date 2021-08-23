import Trie from './index'

describe("Trie", () => {
  it("should insert", () => {
    const trie = new Trie();
    // Add a word
    trie.insert("word");
    expect(trie.root).toContain("word");
  });
  it("should find", () => {
    const trie = new Trie();
    // Add a word
    trie.insert("word");
    expect(trie.find("word")).toBeTruthy();
  });
  it("should not find if not there", () => {
    const trie = new Trie();
    // Add a word
    trie.insert("word");
    expect(trie.find("not")).toBeFalsy();
  });
});
