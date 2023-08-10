import { useRef } from 'react';
import React from 'react';
import styles from '../Form/form.module.scss';
import { useMediaQuery } from 'react-responsive';
import useTranslation from 'next-translate/useTranslation';

const Table = ({ rows, currencySymbol, onModifyTable, onAddInvoiceRow, onRemoveInvoiceRow, onFormSubmit }) => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const rateRef = useRef([]);
  const quantityRef = useRef([]);

  const calculateAmount = (rate, qty) => {
    const amount = (parseFloat(rate ? rate : 0) * parseFloat(qty ? qty : 0)).toFixed(2);
    return amount;
  }

  const { t } = useTranslation('common');

  const tableRows = rows.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        {!isMobile && <tr className={styles.item__row}>
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
              id={`description__${item.id}`}
              key={`des-input_${item.id}`}
              placeholder={t('item_description')}
              maxLength={30}
              onChange={(e) => handleChange(e, item)}
              value={item.description || ''}
            />
            <textarea
              name="details"
              id={`details__${item.id}`}
              key={`details-input_${item.id}`}
              placeholder={t('additional_details')}
              className={`${styles.input__default} ${styles.details}`}
              onChange={(e) => handleChange(e, item)}
              value={item.details || ''}
            ></textarea>
          </td>
          <td className={styles.rate}>
            <input
              className={styles.input__default}
              type="number"
              name="rate"
              id={`rate__${item.id}`}
              ref={el => rateRef.current[index] = el}
              placeholder="0.00"
              maxLength={20}
              key={`rate-input_${item.id}`}
              onChange={(e) => handleChange(e, item, index)}
              value={item.rate || ''}
            />
          </td>
          <td className={styles.qty}>
            <input
              className={styles.input__default}
              type="number"
              name="quantity"
              id={`quantity__${item.id}`}
              ref={el => quantityRef.current[index] = el}
              placeholder="0"
              maxLength={15}
              key={`qty-input_${item.id}`}
              onChange={(e) => handleChange(e, item, index)}
              value={item.quantity || ''}
            />
          </td>
          <td className={styles.amount}>
            <span>{currencySymbol} </span>
            <span>{calculateAmount(item.rate, item.quantity, item.id)}</span>
          </td>
          {/* <td className={styles.tax}>Tax</td> */}
        </tr>}

        {isMobile && <div className={styles.item__row}>

          <div className={styles.description}>
            <input
              className={styles.input__default}
              type="text"
              name="description"
              id={`description__${item.id}`}
              key={`des-input_${item.id}`}
              placeholder={t('item_description')}
              maxLength={20}
              onChange={(e) => handleChange(e, item)}
              value={item.description || ''}
            />
            <textarea
              name="details"
              id={`details__${item.id}`}
              key={`details-input_${item.id}`}
              placeholder={t('additional_details')}
              className={`${styles.input__default} ${styles.mobile__details}`}
              onChange={(e) => handleChange(e, item)}
              value={item.details || ''}
            ></textarea>
          </div>
          <div className={styles.input__group}>
            <div className={styles.rate}>
              <input
                className={styles.input__default}
                type="number"
                name="rate"
                id={`rate__${item.id}`}
                ref={el => rateRef.current[index] = el}
                placeholder={t('price')}
                maxLength={20}
                key={`rate-input_${item.id}`}
                onChange={(e) => handleChange(e, item, index)}
                value={item.rate || ''}
              />
            </div>
            <div className={styles.qty}>
              <input
                className={styles.input__default}
                type="number"
                name="quantity"
                id={`quantity__${item.id}`}
                ref={el => quantityRef.current[index] = el}
                placeholder="0"
                maxLength={15}
                key={`qty-input_${item.id}`}
                onChange={(e) => handleChange(e, item, index)}
                value={item.quantity || ''}
              />
            </div>
          </div>

          <div className={styles.item__row__actions__mobile}>
            <div className={styles.confirm__delete__button}>
              <button
                type='button'
                title="Remove Item"
                className={styles.btn__remove}
                onClick={() => handleRemove(item.id)}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className={styles.svg__close__icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
                <span className={styles.btn__text}>{t('delete')}</span>
              </button>

            </div>
            <div className={styles.amount}>
              <span>{currencySymbol} </span>
              <span>{calculateAmount(item.rate, item.quantity, item.id)}</span>
            </div>
          </div>
        </div>}
      </React.Fragment >
    )
  })

  const handleClick = () => {
    onAddInvoiceRow();
  }

  const handleRemove = (id) => {
    onRemoveInvoiceRow(id);
  }

  const handleChange = (e, item, index) => {
    let amount;

    if (rateRef?.current[index] && quantityRef?.current[index]) {
      let rate = Number(rateRef.current[index].value);
      let quantity = Number(quantityRef.current[index].value);
      amount = calculateAmount(rate, quantity)
    }

    onModifyTable(e, item.id, amount);
  }

  return (
    <div className={styles.table__wrapper}>
      {!isMobile && <table className={styles.table}>
        <thead>
          <tr className={styles.invoice__headers}>
            <th className={styles.controls}>&nbsp;</th>
            <th className={styles.description}>{t('description')}</th>
            <th className={styles.rate}>{t('rate')}</th>
            <th className={styles.qty}>{t('qty')}</th>
            <th className={styles.amount}>{t('amount')}</th>
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
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>}
      {isMobile && <div className={styles.mobile__section}>
        <>{tableRows}</>
        <button
          type='button'
          onClick={handleClick}
          className={`${styles.add__invoice__item} ${styles.btn__add}`}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </button>
      </div>}
    </div>
  );
}

export default Table;