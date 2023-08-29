import { useRef, useState } from 'react';
import SearchDropdown from "./SearchDropdown"
import styles from './dropdown.module.scss';
import currencies from '../../data/currencies.json';

const useFocus = () => {
	const htmlElRef = useRef(null);
	const setFocus = () => {
		htmlElRef.current && htmlElRef.current.focus();
	};
	return [htmlElRef, setFocus];
};

const Dropdown = ({ currencyCode, currencySymbol, onCurrencyModify }) => {
  const [suggestions, setSuggestions] = useState(currencies);
  const [isActive, setIsActive] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  const handleCurrencyClick = (currency) => {
    onCurrencyModify(currency)
    setIsActive(false);
  }
  const handleSelectSuggestion = (currency) => {
		onCurrencyModify(currency);
		setTimeout(() => {
			setIsActive(false);
		}, 100);
	};
  const handleDropdownClick = ()=>{
    setIsActive(!isActive);
    setTimeout(() => {
      setInputFocus();
    }, 100);
  };

  return ( 
    <div className={styles.dropdown}>
      {!isActive? (<div 
        className={styles.dropdown__btn}
        onClick={handleDropdownClick}
      >
        <div className={styles.selected__currency}>
          <span className={styles.code}>{currencyCode} </span>
          <span>{currencySymbol}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
      </div>): (
        <SearchDropdown handleChange={setSuggestions} selectSuggestion={handleSelectSuggestion} innerRef={inputRef} />
      )}
      {isActive && (
        <div className={styles.dropdown__content}>
          {suggestions.map((currency, index) => (
              currency.code === currencyCode
              ? <div 
                className={`${styles.dropdown__item} ${styles.accent}`} 
                key={index}
                onClick={() => handleCurrencyClick(currency)}>
                  <span className={styles.code}>{currency.code}</span>
                  <span className={styles.symbol}>{currency.symbol}</span>
              </div>
              : <div 
                className={styles.dropdown__item} 
                key={index}
                onClick={() => handleCurrencyClick(currency)}>
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