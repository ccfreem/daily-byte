class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word: string): void {
    if (!word) return;
    // iterate over characters, adding children as we go
    for (let i = 0; i < word.length; i++) {
      // find current
      const char = word[i];
      let currNode = this.root.child[char];
      if (!currNode) {
        console.log(currNode, "inside");
        // add to child the next letter
        this.root.child[char] = new TrieNode(char);
        currNode = this.root.child[char];
      }
      console.log(currNode);
      if (i === word.length - 1) {
        currNode.isEndWord = true;
      }
    }
  }

  search(word: string): boolean {
    return false;
  }

  startsWith(prefix: string): boolean {
    return false;
  }
}

class TrieNode {
  char: string;
  child: TrieNode | {};
  isEndWord: boolean;

  constructor(char: string) {
    this.char = char;
    this.child = {};
    this.isEndWord = false;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;
