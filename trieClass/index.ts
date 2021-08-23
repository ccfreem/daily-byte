class TrieNode {
  children: TrieNode[];
  isEndWord: boolean;
  char: string;
  constructor(char: string) {
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.isEndWord = false; // will be true if the node represents the end of word
    this.char = char; // To store the value of a particular key
  }

  // Function to mark the currentNode as Leaf
  markAsLeaf() {
    this.isEndWord = true;
  }

  // Function to unMark the currentNode as Leaf
  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }
  getIndex(t: string) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(key: string) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase();
    let currentNode = this.root as TrieNode;
    let index = 0;

    // Store the character index
    // Iterate the trie with the given character index,
    // If the index points to null
    // simply create a TrieNode and go down a level
    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(key[level]);
        console.log(String(key[level]) + " inserted");
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }

  //Function to search a given key in Trie
  search(key) {
    if (key == null) {
      return false; //null key
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    //Iterate the Trie with given character index,
    //If it is null at any point then we stop and return false
    //We will return true only if we reach leafNode and have traversed the
    //Trie based on the length of the key

    for (var level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode != null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }
}

export default Trie;
