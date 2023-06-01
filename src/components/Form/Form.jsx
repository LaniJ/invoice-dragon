import { useState } from "react";
import styles from './form.module.scss';
import Table from '../Table/Table'
import Image from 'next/image'

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
  // const getExtraProps = (name) => {
  //   return isFirstTime ? {value :  prefill[name] } : {}
  // }

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

  return (  
    <div>
      <form className={styles.form}>
        <div className={styles.header}>
          <input 
            className={`${styles.invoice__title} ${styles.input__default}`}
            type="text" 
            name="formName" 
            id="formName" 
            placeholder="Invoice "
            onChange={handleChange}
            value={prefill.formName || ''} 
            // {...getExtraProps("formName")}
            // {isFirstTime ? {value :  pri.formName } : {}}
          />
          <div className={styles.photo__drop__zone}>
            <input 
              className={styles.logo__input}
              accept="image/jpeg ,image/jpg ,image/png ,image/webp"
              type="file" 
              name="logo" 
              id="logo" 
              placeholder="Logo"
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
              <span>{logoUpdated ? 'Update logo' : 'Add your logo'}</span>
              <span className={styles.logoIcon}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div className={styles.invoice__details}>
          <div className={styles.biz__section}>
            <h3>From:</h3>
            <br /><br />
            <div className={styles.form__field}>
              <label htmlFor="businessName" className={styles.label}>Name</label>
              <input 
                className={styles.input__default}
                type="text" 
                name="businessName" 
                id="businessName" 
                placeholder="Business Name"
                onChange={handleChange}
                value={prefill.businessName || ''}  
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="email" className={styles.label}> Email</label>
                <input
                  className={styles.input__default}
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="name@business.com"
                  onChange={handleChange}
                  value={prefill.email || ''} 
                />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="address" className={styles.label}> Address</label>
              <input
                className={styles.input__default}
                type="text" 
                name="address" 
                id="address" 
                placeholder="street"
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
                placeholder="city, state"
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
                placeholder="postal code"
                onChange={handleChange}
                value={prefill.zipcode || ''} 
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="phone" className={styles.label}>Phone</label>
              <input
                className={styles.input__default}
                type="tel" 
                name="phone" 
                id="phone" 
                placeholder="(123) 456 789"
                onChange={handleChange}
                value={prefill.phone || ''} 
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="website" className={styles.label}>Website</label>
              <input
                className={styles.input__default}
                type="text" 
                name="website" 
                id="website" 
                placeholder="https://example-website.com"
                onChange={handleChange}
                value={prefill.website || ''} 
              />
            </div>
          </div>

          <div className={styles.customer__section}>
            <h3>Bill To:</h3>  
            <br /><br />
            <div className={styles.form__field}>
              <label htmlFor="clientName" className={styles.label}>Name</label>
              <input 
                className={styles.input__default}
                type="text" 
                name="clientName" 
                id="clientName" 
                placeholder="Business Name"
                onChange={handleChange}
                value={prefill.clientName || ''} 
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientEmail" className={styles.label}>Email</label>
                <input
                  className={styles.input__default}
                  type="email" 
                  name="clientEmail" 
                  id="clientEmail" 
                  placeholder="name@clientemail.com"
                  onChange={handleChange}
                  value={prefill.clientEmail || ''} 
                />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientAddress" className={styles.label}>Address</label>
              <input
                className={styles.input__default}
                type="text" 
                name="clientAddress" 
                id="clientAddress" 
                placeholder="street"
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
                placeholder="city, state"
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
                placeholder="postal code"
                onChange={handleChange}
                value={prefill.clientZipcode || ''} 
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="clientPhone" className={styles.label}>Phone</label>
              <input
                className={styles.input__default}
                type="tel" 
                name="clientPhone" 
                id="clientPhone" 
                placeholder="(123) 456 789"
                onChange={handleChange}
                value={prefill.clientPhone || ''} 
              />
            </div>
          </div>
        </div>
        <hr className={styles.divider}/>
        <div className={styles.row__group}>
          <div  className={styles.group}>
            <div className={styles.form__field}>
              <label htmlFor="InvoiceNo" className={styles.label}>Invoice No</label>
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
            {/* change placeholder to be toady's date by default */}
            <div className={styles.form__field}>
              <label htmlFor="date" className={styles.label}>Date</label>
              <input
                className={styles.input__default}
                type="date" 
                name="date" 
                id="date" 
                placeholder="Apr 11, 2023"
                onChange={handleChange}
                value={prefill.date || ''} 
              />
            </div>
            {/* <div className={styles.form__field}>
              <label htmlFor="terms" className={styles.label}>Terms</label>
              <input
                className={styles.input__default}
                type="text" 
                name="terms" 
                id="terms" 
                placeholder="One week"
                onChange={handleChange}
                value={prefill.terms || ''} 
              />
            </div> */}
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
          <div className={styles.total}>
            <span>Total</span>
            <span className={styles.total}>{currencySymbol}{total.toFixed(2)}</span>
          </div>
        </section>
        <div>
          <p>Notes</p>
          <textarea
            name="notes" 
            id="notes"
            onChange={handleChange}
            value={prefill.notes || ''} 
            style={{height: '135px', marginTop: '18px', resize: 'none', fontFamily: 'Arial'}}
            placeholder="Notes - any relevant information not covered, additional terms and conditions."
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