import { useState } from 'react';
import React from 'react';
import styles from '../Form/form.module.scss';
import { useEffect } from 'react';


const Table = () => {

  // const [itemCount, setItemCount] = useState(1);
  const [rows, setRows] = useState(Array(1).fill({id: 0}));
  let itemCount = rows.length;

  
  const tableRows = rows.map((item, index) => {
    return (
      <React.Fragment key={index}>
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
              key={`des-input_${index}`}
              placeholder="Item Description"
              maxLength={20}
            />
            <textarea
              name="details" 
              id="details"
              placeholder="Additional details..."
              className={`${styles.input__default} ${styles.details}`}></textarea>
          </td>
          <td className={styles.rate}>
            <input 
              className={styles.input__default}
              type="text" 
              name="rate" 
              id="rate" 
              placeholder="0.00"
              maxLength={20}
            />
          </td>
          <td className={styles.qty}>
            <input 
              className={styles.input__default}
              type="text" 
              name="quantity" 
              id="quantity" 
              placeholder="0"
              maxLength={15}
            />
          </td>
          <td className={styles.amount}>$0.00</td>
          <td className={styles.tax}>Tax</td>
        </tr>
      </React.Fragment >
    )
  })

  // useEffect(() => {
  //   const handleRemove = (index) => {
  //     console.log('removed', index);
  //     const updatedRows = rows.filter(item => item.id !== index)
  //     console.log('updatedRows', updatedRows);
  
  //     setRows((prevRows) => prevRows.filter(item => item !== index));
  //   }
  // })

  const handleClick = () => {
    console.log('add', rows);
    // itemCount = itemCount + 1;
    // setItemCount(itemCount + 1);
    const lastId = rows.length ? rows[rows.length - 1].id : 0;
    console.log('lastId', lastId);
    setRows((prevRows) => [...prevRows, {id: lastId + 1}]);
  }

  const handleRemove = (id) => {
    console.log('removed', id, rows);
    const updatedRows = rows.filter(item => item.id !== id)
    console.log('updatedRows', updatedRows);
    setRows(updatedRows);
  }

  // const deleteItem = (id) => {
  //   const currentTodos = todos.filter(task => task.id !== id);
  //   setTodos(currentTodos);
  // }

  return ( 
    <div>
      <h3>check</h3>
      {/* <>{tableRows}</> */}
      <table className={styles.table}>
        <thead>
          <tr className={styles.invoice__headers}>
            <th className={styles.controls}>&nbsp;</th>
            <th className={styles.description}>Description</th>
            <th className={styles.rate}>Rate</th>
            <th className={styles.qty}>Qty</th>
            <th className={styles.amount}>Amount</th>
            <th className={styles.tax}>Tax</th>
          </tr>
        </thead>
        <tbody className={styles.invoice__items}>
          {/* <tr className={styles.item__row}>
            <td className={styles.item__row__actions}>
              <div className={styles.confirm__delete__button}>
                <button title="Remove Item" className={styles.btn__remove}>
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
                placeholder="Item Description"
                maxLength={20}
              />
              <textarea
                name="details" 
                id="details"
                placeholder="Additional details..."
                className={`${styles.input__default} ${styles.details}`}></textarea>
            </td>
            <td className={styles.rate}>
              <input 
                className={styles.input__default}
                type="text" 
                name="rate" 
                id="rate" 
                placeholder="0.00"
                maxLength={20}
              />
            </td>
            <td className={styles.qty}>
              <input 
                className={styles.input__default}
                type="text" 
                name="quantity" 
                id="quantity" 
                placeholder="0"
                maxLength={15}
              />
            </td>
            <td className={styles.amount}>$0.00</td>
            <td className={styles.tax}>Tax</td>
          </tr> */}
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