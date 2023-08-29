// From https://codesandbox.io/s/search-bar-wxj36?file=/src/trie.js:0-2973
class TrieNode {
	constructor(letter) {
		// properties
		this.letter = letter;
		this.prevLetter = null;
		this.nextLetters = {}; // an object for the following letters
		this.isComplete = false; // check whether letter is last of word
	}
	//methods
	// iterates through nodes to get word prediction
	getWord = () => {
		let node = this;
		const wordLetters = [];
		while (node.prevLetter) {
			wordLetters.unshift(node.letter);
			node = node.prevLetter; // set the previous letter as node
		}
		return wordLetters.join("");
	};
}

class Trie {
	constructor() {
		// properties
		this.root = new TrieNode(null);
	}
  
  // methods
	// insert new word in Trie
	insert = (word) => {
		let node = this.root; // set first node to root node
		for (let i = 0; i < word.length; i++) {
			const current_letter = word[i];
			if (!node.nextLetters[current_letter]) {
				// if letter not in next letters
				node.nextLetters[current_letter] = new TrieNode(current_letter); // make it node
				node.nextLetters[current_letter].prevLetter = node; // add it as a child node
			}
			node = node.nextLetters[current_letter]; // reset node to current letter & continue iteration

			// check whether whole word is inserted
			if (i === word.length - 1) {
				node.isComplete = true;
			}
		}
	};

	// check if word exists
	contains = (word) => {
		var node = this.root; // set first node to root node
		for (let i = 0; i < word.length; i++) {
			const current_letter = word[i];
			let next_node = node.nextLetters[current_letter];
			if (next_node) {
				// if letter is one of next letters
				node = next_node; // set it as a next node
			} else {
				return false;
			}
		}
		return node.isComplete; // definitely returns 'true'
	};

	// find words with similar previous letters
	find = (clue_letters) => {
		let node = this.root; // set first node to root node
		const output = [];
		for (let i = 0; i < clue_letters.length; i++) {
			const clue_letter = clue_letters[i];
			let next_node = node.nextLetters[clue_letter];
			if (next_node) {
				// if clue letter is one of next letters
				node = next_node; // set it as next node
			} else {
				return output;
			}
		}

		// use the last node to find the next possible words
		this.findAllWords(node, output);
		return output;
	};

	// function that finds next possible words
	findAllWords = (node, arr) => {
		if (node.isComplete) {
			// check if node is end node
			arr.unshift(node.getWord()); // get all words and add them to array
		}

		// otherwise recursively call the next nodes
		for (var next_letter in node.nextLetters) {
			this.findAllWords(node.nextLetters[next_letter], arr);
		}
	};
}

export default Trie;
