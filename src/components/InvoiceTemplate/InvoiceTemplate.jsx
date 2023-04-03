import styles from "./invoiceTemplate.module.scss";
// import styles from "./button.module.scss";
import Image from 'next/image'
import InvoiceTemp1 from '../../assets/images/invoiceTemplate1.png';
import InvoiceTemp2 from '../../assets/images/invoiceTemplate2.png';
import InvoiceTemp3 from '../../assets/images/invoiceTemplate3.png';
import ReceiptTemp1 from '../../assets/images/receiptTemplate1.png';
import { useState } from "react";


const InvoiceTemplate = ({ service }) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (e) => {
    console.log('check', e.target.value)
    setSelectedOption(e.target.value)
  }

  return ( 
    <div className={styles.section}>
      <h2>Choose a Template</h2>
      {/* <div className={styles.template__section}> */}
       
      <hr />
      <br /><br />

      {/* <label>
        <input type="radio" name="test" value="small" checked>
        <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1">
      </label> */}

      <div className={styles.section__templates}>
        <label  className={styles.label} htmlFor="option1">
          <input 
            className={styles.radio} 
            type="radio" 
            name="test" 
            value="option1" 
            id="option1"
            checked={selectedOption==='option1'}
            onChange={handleChange} 
          />
          {/* <img 
            className={styles.img} 
            src="https://via.placeholder.com/40x60/0bf/fff&text=A" 
            alt="Option 1" 
            onChange={handleChange} 
          /> */}
          <Image
            className={styles.enlarge}
            src={InvoiceTemp1}
            alt="Option 3"
            priority
          />
        </label>

        <label className={styles.label} htmlFor="option2">
          <input 
            className={styles.radio} 
            type="radio" 
            name="test" 
            value="option2"
            id="option2"
            checked={selectedOption==='option2'}
            onChange={handleChange} 
          />
          <Image
            className={styles.enlarge}
            src={InvoiceTemp2}
            alt="Option 3"
            priority
          />
          {/* <img className={styles.img} src="https://via.placeholder.com/40x60/0bf/fff&text=B" alt="Option 2" /> */}
        </label>

        <label className={styles.label} htmlFor="option3">
          <input 
            className={styles.radio} 
            type="radio" 
            name="test" 
            value="option3" 
            id="option3"
            checked={selectedOption==='option3'}
            onChange={handleChange} 
          />
          <Image
            className={styles.enlarge}
            src={InvoiceTemp3}
            alt="Option 3"
            priority
          />
        </label>
      </div>

      
      
      

      {/* <label>
        <input type="radio" name="test" value="big">
        <img src="https://via.placeholder.com/40x60/b0f/fff&text=B" alt="Option 2">
      </label> */}
      
      {/* <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </div>
   );
}
 
export default InvoiceTemplate;