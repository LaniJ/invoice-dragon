import styles from './dropdown.module.scss';
import currencies from '../../data/currencies.json';
import { useState } from 'react';

const Dropdown = ({ currencyCode, currencySymbol, onCurrencyModify }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = (currency) => {
    onCurrencyModify(currency)
    setIsActive(false);
  }

  return ( 
    <div className={styles.dropdown}>
      <div 
        className={styles.dropdown__btn}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.selected__currency}>
          <span className={styles.code}>{currencyCode} </span>
          <span>{currencySymbol}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
      </div>
      {isActive && (
        <div className={styles.dropdown__content}>
          {currencies.map((currency, index) => (
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