class Trie {
  root;
  constructor() {
    this.root = [];
  }

  insert(word) {
    if (!this.root.includes(word)) {
      this.root.push(word);
    }
  }
  find(word) {
    return this.root.includes(word);
  }
}
module.exports = Trie;
