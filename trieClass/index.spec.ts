import Trie from "./tri";

describe("Trie", () => {
  it("should insert", () => {
    const trie = new Trie();
    // Add a word
    trie.insert("word");
    console.log(trie);
    console.log(trie.search("word"));
    expect(trie.search("word")).toBeTruthy();
  });
  it("should find", () => {
    // const trie = new Trie();
    // // Add a word
    // trie.insert("word");
    // expect(trie.find("word")).toBeTruthy();
  });
  it("should not find if not there", () => {
    // const trie = new Trie();
    // // Add a word
    // trie.insert("word");
    // expect(trie.find("not")).toBeFalsy();
  });
});
