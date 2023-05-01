import { useState } from 'react';
import React from 'react';
import styles from '../Form/form.module.scss';
import { useEffect } from 'react';


const Table = ({ rows, currencySymbol, onModifyTable, onAddInvoiceRow, onRemoveInvoiceRow }) => {

  const calculateAmount = (rate, qty) => {
    return (parseFloat(rate ? rate : 0) * parseFloat(qty ? qty : 0)).toFixed(2);
  }
  
  const tableRows = rows.map((item, index) => { 
    return (
      <React.Fragment key={item.id}>
        <tr className={styles.item__row}>
          <td className={styles.item__row__actions}>
            <div className={styles.confirm__delete__button}>
              <button
                type='button'
                title="Remove Item"
                className={styles.btn__remove}
                onClick={() => handleRemove(item.id)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className={styles.svg__close__icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
              </button>
            </div>
          </td>
          <td className={styles.description}>
            <input 
              className={styles.input__default}
              type="text" 
              name="description" 
              id="description"
              key={`des-input_${item.id}`}
              placeholder="Item Description"
              maxLength={20}
              onChange={(e) => handleChange(e, item.id)}
              value={item.description || ''} 
            />
            <textarea
              name="details" 
              id="details"
              key={`details-input_${item.id}`}
              placeholder="Additional details..."
              className={`${styles.input__default} ${styles.details}`}
              onChange={(e) => handleChange(e, item.id)}
              value={item.details || ''} 
              ></textarea>
          </td>
          <td className={styles.rate}>
            <input 
              className={styles.input__default}
              type="number" 
              name="rate" 
              id="rate" 
              placeholder="0.00"
              maxLength={20}
              key={`rate-input_${item.id}`}
              onChange={(e) => handleChange(e, item.id)}
              value={item.rate || ''} 
            />
          </td>
          <td className={styles.qty}>
            <input 
              className={styles.input__default}
              type="number" 
              name="quantity" 
              id="quantity" 
              placeholder="0"
              maxLength={15}
              key={`qty-input_${item.id}`}
              onChange={(e) => handleChange(e, item.id)}
              value={item.quantity || ''} 
            />
          </td>
          {/* <td className={styles.amount}>{currencySymbol} rate - {Number(item.rate)} qty - {item.quantity} {item.rate * item.quantity}</td> */}
          <td className={styles.amount}>
            <span>{currencySymbol} </span>
            <span>{calculateAmount(item.rate, item.quantity)}</span>
          </td>
          {/* <td className={styles.tax}>Tax</td> */}
        </tr>
      </React.Fragment >
    )
  })

  const handleClick = () => {
    onAddInvoiceRow();
  }

  const handleRemove = (id) => {
    onRemoveInvoiceRow(id);
  }

  const handleChange = (e, id) => {
    onModifyTable(e, id);
  }

  return ( 
    <div>
      {/* <>{tableRows}</> */}
      <table className={styles.table}>
        <thead>
          <tr className={styles.invoice__headers}>
            <th className={styles.controls}>&nbsp;</th>
            <th className={styles.description}>Description</th>
            <th className={styles.rate}>Rate</th>
            <th className={styles.qty}>Qty</th>
            <th className={styles.amount}>Amount</th>
            {/* <th className={styles.tax}>Tax</th> */}
          </tr>
        </thead>
        <tbody className={styles.invoice__items}>
          <>{tableRows}</>
          <tr className={styles.item__row}>
            <td className={styles.item__row__actions}>
              <button
                type='button'
                onClick={handleClick}
                className={`${styles.add__invoice__item} ${styles.btn__add}`}>
                {/* class="svg-inline--fa fa-plus fa-w-14"  */}
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}
 
export default Table;