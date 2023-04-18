import { style } from "d3";
import { useState } from "react";
import styles from './form.module.scss';
import Table from '../Table/Table'

const Form = ({ onBizMod, onEmailMod, onPreviewToggle }) => {
  // const [businessName, setBusinessName] = useState('');
  // const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log('new change', name, value);
    onEmailMod(name, value);
  }

  const handleChangeB = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    onBizMod(e.target.value);
    // setBusinessName(e.target.value);
  }
  const toggleViews = () => {
    onPreviewToggle();
  }

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.');
    console.log('submitted!!!');

    // setSubmitted(true);
  }

  return (  
    <div>
      <button onClick={toggleViews}>Preview</button>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.header}>
          <input 
            className={`${styles.invoice__title} ${styles.input__default}`}
            type="text" 
            name="formName" 
            id="formName" 
            placeholder="Invoice "
            onChange={handleChange}
          />
          <div className={styles.photo__drop__zone}>
            <input 
              className={styles.logo__input}
              accept="image/jpeg ,image/jpg ,image/png ,image/webp"
              type="file" 
              name="logo" 
              id="logo" 
              placeholder="Logo"
              onChange={handleChange}
            />
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
              </svg>
              <span>+ Logo</span>
              <span className={styles.upload__message}>Uploading...</span>
              <span className={styles.guide__message}>Add logo</span>
            </div>
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
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="zipcode" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text" 
                name="zipcode" 
                id="zipcode" 
                placeholder="zipcode"
                onChange={handleChange}
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
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="Owner" className={styles.label}>Owner</label>
              <input
                className={styles.input__default}
                type="text" 
                name="Owner" 
                id="Owner" 
                placeholder="Business owner name"
                onChange={handleChange}
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
                />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="address" className={styles.label}>Address</label>
              <input
                className={styles.input__default}
                type="text" 
                name="address" 
                id="address" 
                placeholder="street"
                onChange={handleChange}
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
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="zipcode" className={styles.label}></label>
              <input
                className={styles.input__default}
                type="text" 
                name="zipcode" 
                id="zipcode" 
                placeholder="zipcode"
                onChange={handleChange}
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
                placeholder="INV00001"
                onChange={handleChange}
              />
            </div>
            {/* change placeholder to be toady's date by default */}
            <div className={styles.form__field}>
              <label htmlFor="terms" className={styles.label}>Date</label>
              <input
                className={styles.input__default}
                type="text" 
                name="terms" 
                id="terms" 
                placeholder="Apr 11, 2023"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__field}>
              <label htmlFor="terms" className={styles.label}>Terms</label>
              <input
                className={styles.input__default}
                type="text" 
                name="terms" 
                id="terms" 
                placeholder="https://example-website.com"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* invoice list table */}

        {/* <div>
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
              <tr className={styles.item__row}>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </td>
                <td className={styles.amount}>$0.00</td>
                <td className={styles.tax}>Tax</td>
              </tr>

              <tr className={styles.item__row}>
                <td className={styles.item__row__actions}>
                  <button className={`${styles.add__invoice__item} ${styles.btn__add}`}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div> */}

        <Table />

        <button>Create Invoice</button>
      </form>
    </div>
  );
}
 
export default Form;