import { useState } from "react";
import styles from './form.module.scss';
import Table from '../Table/Table';
import Image from 'next/image';

import useTranslation from "next-translate/useTranslation";

import { useEffect, useRef } from "react";

const Form = ({ logo, updateLogo, logoUpdated, prefill, currencySymbol, rows, onFormMod, onTableUpdate, onRowAdd, onRowRemove }) => {
  const [total, setTotal] = useState(0);
  const imageRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    onFormMod(name, value);
  }

  // Table Functions
  const updateTable = (e, id, amount) => {
    onTableUpdate(e, id, amount);
  }
  const addRow = () => {
    onRowAdd();
  }
  const removeRow = (id) => {
    onRowRemove(id);
  }

  const changeImage = () => {
    imageRef.current.click();
  }

  const imageHandler = (e) => {
    updateLogo(e);
  }

  useEffect(() => {
    setTotal(calculateTotal());
  }, [rows]);

  const calculateTotal = () => {
    let sum = 0;
    rows.forEach(row => {
      sum += parseFloat(row.amount);
    })
    return sum;
  }

  const { t } = useTranslation('common');

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.header}>
          <input
            className={`${styles.invoice__title} ${styles.input__default}`}
            type="text"
            name="formName"
            id="formName"
            placeholder={`${t('invoice')}`}
            onChange={handleChange}
            value={prefill.formName || ''}
          />
          <div className={styles.photo__drop__zone}>
            <input
              className={styles.logo__input}
              accept="image/jpeg ,image/jpg ,image/png ,image/webp"
              type="file"
              name="logo"
              id="logo"
              placeholder='logo'
              ref={imageRef}
              onChange={imageHandler}
            />
            <div className={styles.img__holder} onClick={changeImage}>

              {logo && <Image
                src={logo}
                className={styles.logo}
                alt="company logo"
                width={150}
                height={150}
              />}
            </div>
            <label htmlFor="logo" className={styles.image__label}>
              <span>{logoUpdated ? `${t('update_logo')}` : `${t('add_logo')}`}</span>
              <span className={styles.logoIcon}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div className={styles.invoice__details}>
          <div>
            <h3>{t('from')}</h3>
            <br /><br />
            <div className={styles.form__field}>
              <label htmlFor="businessName" className={styles.label}>{t('name')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="businessName"
                id="businessName"
                placeholder={`${t('business_name_placeholder')}`}
                onChange={handleChange}
                value={prefill.businessName || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="email" className={styles.label}> {t('email')}</label>
              <input
                className={styles.input__default}
                type="email"
                name="email"
                id="email"
                placeholder={t('business_email_placeholder')}
                onChange={handleChange}
                value={prefill.email || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="address" className={styles.label}> {t('address')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="address"
                id="address"
                placeholder={t('street_placeholder')}
                onChange={handleChange}
                value={prefill.address || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="city" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text"
                name="city"
                id="city"
                placeholder={t('city_state_country_placeholder')}
                onChange={handleChange}
                value={prefill.city || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="zipcode" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder={t('postal_code_placeholder')}
                onChange={handleChange}
                value={prefill.zipcode || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="phone" className={styles.label}>{t('phone')}</label>
              <input
                className={styles.input__default}
                type="tel"
                name="phone"
                id="phone"
                placeholder={t('phone_placeholder')}
                onChange={handleChange}
                value={prefill.phone || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="website" className={styles.label}>{t('website')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="website"
                id="website"
                placeholder={t('website_placeholder')}
                onChange={handleChange}
                value={prefill.website || ''}
              />
            </div>
          </div>

          <div>
            <h3>{t('bill_to')}</h3>
            <br /><br />
            <div className={styles.form__field}>
              <label htmlFor="clientName" className={styles.label}>{t('name')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="clientName"
                id="clientName"
                placeholder={`${t('business_name_placeholder')}`}
                onChange={handleChange}
                value={prefill.clientName || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientEmail" className={styles.label}>{t('email')}</label>
              <input
                className={styles.input__default}
                type="email"
                name="clientEmail"
                id="clientEmail"
                placeholder={`${t('client_email_placeholder')}`}
                onChange={handleChange}
                value={prefill.clientEmail || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientAddress" className={styles.label}>{t('address')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder={t('street_placeholder')}
                onChange={handleChange}
                value={prefill.clientAddress || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientCity" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text"
                name="clientCity"
                id="clientCity"
                placeholder={t('city_state_country_placeholder')}
                onChange={handleChange}
                value={prefill.clientCity || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientZipcode" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text"
                name="clientZipcode"
                id="clientZipcode"
                placeholder={t('postal_code_placeholder')}
                onChange={handleChange}
                value={prefill.clientZipcode || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientPhone" className={styles.label}>{t('phone')}</label>
              <input
                className={styles.input__default}
                type="tel"
                name="clientPhone"
                id="clientPhone"
                placeholder={`${t('phone_placeholder')}`}
                onChange={handleChange}
                value={prefill.clientPhone || ''}
              />
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.row__group}>
          <div className={styles.group}>
            <div className={styles.form__field}>
              <label htmlFor="InvoiceNo" className={styles.label}>{t('invoice_no')}</label>
              <input
                className={styles.input__default}
                type="text"
                name="InvoiceNo"
                id="InvoiceNo"
                placeholder="IN001"
                onChange={handleChange}
                value={prefill.InvoiceNo || ''}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="date" className={styles.label}>{t('due_date')}</label>
              <input
                className={styles.input__default}
                type="date"
                name="date"
                id="date"
                onChange={handleChange}
                value={prefill.date || ''}
              />
            </div>
          </div>
        </div>

        {/* invoice list table */}
        <Table
          rows={rows}
          prefill={prefill}
          onAddInvoiceRow={addRow}
          onRemoveInvoiceRow={removeRow}
          currencySymbol={currencySymbol}
          onModifyTable={updateTable}
        />
        <section className={styles.total__section}>
          <div>
            <span>{t('total')}</span>
            <span className={styles.total}>{currencySymbol}{total.toFixed(2)}</span>
          </div>
        </section>
        <div>
          <p>{t('notes')}</p>
          <textarea
            name="notes"
            id="notes"
            onChange={handleChange}
            value={prefill.notes || ''}
            style={{ height: '135px', marginTop: '18px', resize: 'none', fontFamily: 'Arial' }}
            placeholder={`${t('notes_comment')}`}
            className={`${styles.input__default} ${styles.details}`}></textarea>
        </div>
        {/* Took out signature and photo sections */}

        {/* <section>
          <span>
            <p>Signature</p>
          </span>
          <span>
            <button
              type='button'
              className={`${styles.add__invoice__item} ${styles.btn__add}`}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            </button>
          </span>
        </section>

        <section>
          <p>Photos</p>
          <input 
            accept="image/jpeg ,image/jpg ,image/png ,image/webp"
            type="file" 
            name="photos" 
            id="photos" 
            placeholder="Logo"
          />
          
        </section> */}
      </form>
    </div>
  );
}

export default Form;