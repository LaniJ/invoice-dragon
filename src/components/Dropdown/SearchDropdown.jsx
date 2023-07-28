import { useState } from "react";
import styles from "./dropdown.module.scss";
import currencies from "../../data/currencies.json";
import Trie from "../../lib/trie";

const SearchDropdown = ({ handleChange }) => {
	const [prefix, setPrefix] = useState("");
	const [suggestion, setSuggestion] = useState("");
	const [suggestions, setSuggestions] = useState(currencies);
	const myTrie = new Trie();

	const addWords = () => {
		currencies.forEach((currency) => {
			const country = currency.country.toLowerCase();
			myTrie.insert(country);
		});
	};
	const filterBasedOnSuggestions = (found_words) => {
		const temp = currencies.filter((currency) => {
			return found_words.includes(currency.country.toLowerCase());
		});
		return temp;
	};
	const handleInputChange = (e) => {
		const value = e.target.value;
		setPrefix(value);

		const words = value.split(" ");
		const trie_prefix = words[words.length - 1].toLowerCase();
		const found_words = myTrie.find(trie_prefix).sort((a, b) => {
			return a.length - b.length;
		});
		const first_word = found_words[0];

		if (
			found_words.length !== 0 &&
			value !== "" &&
			value[value.length - 1] !== " "
		) {
			if (first_word != null) {
				const remainder = first_word.slice(trie_prefix.length);
				setSuggestion(value + remainder);
			}
		} else {
			setSuggestion(value);
		}
		const suggestions = filterBasedOnSuggestions(found_words);
		setSuggestions(suggestions);
	};
	const handleKeyDown = (e) => {
		// Right button
		if (e.keyCode === 39) {
			setPrefix(suggestion);
		}
	};
	handleChange(suggestions);

	addWords();

	return (
		<div className={styles.inputs}>
			<input
				type="text"
				name="search-bar"
				className={styles.search_bar_1}
				id="search_bar_1"
				placeholder="Search..."
				value={prefix}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			<input
				type="text"
				name="search-bar"
				className={styles.search_bar_2}
				id="search_bar_2"
				defaultValue={suggestion}
			/>
		</div>
	);
};
export default SearchDropdown;
