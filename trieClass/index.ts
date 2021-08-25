type ChildrenOfNode = {
  [key: string]: TrieNode;
};
class TrieNode {
  value: string;
  isEnd: boolean;
  children: ChildrenOfNode;
  constructor(value: string) {
    this.value = value;
    this.isEnd = false;
    this.children = {};
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word: string): void {
    if (!word) return;
    // Start with the root
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      // If the current node doesn't have a child node for this character
      // create one
      if (!node.children[c]) {
        node.children[c] = new TrieNode(c);
      }
      // Move the current node to the child node of the current character
      node = node.children[c];
      // If this is the last character of the word, the node for this charater
      // is now the representative of the word
      if (i === word.length - 1) {
        node.isEnd = true;
      }
    }
  }

  search(word: string) {
    if (!word) return false;

    // search for a child nodetrie for the first character - if not, return false
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.children[c]) return false;
      node = node.children[c];
      // If we are at the end of the string and this node is not flagged as an end,
      // then its not a word
      if (i === word.length - 1 && !node.isEnd) return false;
    }

    return true;
  }

  autocomplete(prefix: string) {
    if (!prefix) return [];

    let node = this.root;
    let result = [] as string[];
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      // Break out if we are out of character nodes
      if (!node.children[char]) break;

      // Set the current node to the child
      node = node.children[char];

      type NodeQueue = [TrieNode, string];
      // If we have reached the end of the prefix, we
      // can start our breadth first search
      if (i === prefix.length - 1) {
        const queue = [] as NodeQueue[];
        queue.push([node, prefix]);

        while (queue.length) {
          const [node, word] = queue.shift() as NodeQueue;
          if (node.isEnd) {
            result.push(word);
          }
          for (const j in node.children) {
            const child = node.children[j] as TrieNode;
            const childWord: string = word + child.value;
            queue.push([child, childWord]);
          }
        }
      }
    }
    return result;
  }
}
export default Trie;
