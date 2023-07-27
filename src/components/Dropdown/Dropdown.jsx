import { useState } from 'react';
import styles from './dropdown.module.scss';
import currencies from '../../data/currencies.json';
import Trie from "../../lib/trie";

const Dropdown = ({ currencyCode, currencySymbol, onCurrencyModify }) => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState(currencies);
  const myTrie = new Trie();

  const [isActive, setIsActive] = useState(false);
  const addWords = ()=>{
    currencies.forEach(currency=>{
      const country = currency.country.toLowerCase();
      myTrie.insert(country);
    });
  }
  const filterBasedOnSuggestions = (found_words)=>{
    const temp = currencies.filter(currency=>{
      return found_words.includes(currency.country.toLowerCase());
    });
    return temp;
  };
  const handleClick = (currency) => {
    onCurrencyModify(currency)
    setIsActive(false);
  }
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
    const suggestions = filterBasedOnSuggestions(found_words)
    setSuggestions(suggestions);
  };
  const handleKeyDown = (e) => {
    // Right button
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  addWords();

  return ( 
    <div className={styles.dropdown}>
      {!isActive? (<div 
        className={styles.dropdown__btn}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.selected__currency}>
          <span className={styles.code}>{currencyCode} </span>
          <span>{currencySymbol}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
      </div>): (
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
      )}
      {isActive && (
        <div className={styles.dropdown__content}>
          {suggestions.map((currency, index) => (
              currency.code === currencyCode
              ? <div 
                className={`${styles.dropdown__item} ${styles.accent}`} 
                key={index}
                onClick={() => handleClick(currency)}>
                  <span className={styles.code}>{currency.code}</span>
                  <span className={styles.symbol}>{currency.symbol}</span>
              </div>
              : <div 
                className={styles.dropdown__item} 
                key={index}
                onClick={() => handleClick(currency)}>
                  <span className={styles.code}>{currency.code}</span>
                  <span className={styles.symbol}>{currency.symbol}</span>
              </div>
          ))}
        </div>
      )}
    </div>
   );
}
 
export default Dropdown;