import styles from "./invoiceTemplate.module.scss";
// import styles from "./button.module.scss";
import Image from 'next/image'
import InvoiceTemp1 from '../../assets/images/invoiceTemplate1.png';
import InvoiceTemp2 from '../../assets/images/invoiceTemplate2.png';
import InvoiceTemp3 from '../../assets/images/invoiceTemplate3.png';
import ReceiptTemp1 from '../../assets/images/receiptTemplate1.png';
import { useState } from "react";


const InvoiceTemplate = ({ service, template, changeTemplate }) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
    changeTemplate(e);
  }

  return ( 
    <div className={styles.section}>
      <h2>Choose a Template</h2>
       
      <div className={styles.grid__wrapper}>
        {/* option 1 */}
        <div className={styles.template}>
          <label className={styles.label} htmlFor="template1">
            <input 
              className={styles.radio} 
              type="radio" 
              name="test" 
              value="template1" 
              id="template1"
              checked={selectedOption==='template1'}
              onChange={handleChange} 
            />
            <Image
              className={styles.templateImg}
              src={InvoiceTemp3}
              alt="Template Option 1"
              priority
            />
          </label>
        </div>

        {/* option 2 */}
        <div className={styles.template}>
          <label className={styles.label} htmlFor="template2">
            <input 
              className={styles.radio} 
              type="radio" 
              name="test" 
              value="template2"
              id="template2"
              checked={selectedOption==='template2'}
              onChange={handleChange} 
            />
            <Image
              className={styles.templateImg}
              src={InvoiceTemp2}
              alt="Template Option 2"
              priority
            />
          </label>
        </div>
        
        {/* option 3 */}
        <div className={styles.template}>
          <label className={styles.label} htmlFor="template3">
            <input 
              className={styles.radio} 
              type="radio" 
              name="test" 
              value="template3" 
              id="template3"
              checked={selectedOption==='template3'}
              onChange={handleChange} 
            />

            <Image
              className={styles.templateImg}
              src={InvoiceTemp1}
              alt="Template Option 3"
              priority
            />
          </label>
        </div>
        {/* option 4 */}
        <div className={styles.template}>
          <label className={styles.label} htmlFor="template4">
            <input 
              className={styles.radio} 
              type="radio" 
              name="test" 
              value="template4" 
              id="template4"
              checked={selectedOption==='template4'}
              onChange={handleChange} 
            />
            <Image
              className={styles.templateImg}
              src={InvoiceTemp3}
              alt="Template Option 4"
              priority
            />
          </label>
        </div>
      </div>

      {/* <div className={styles.section__templates}>
        <div className={styles.single__template}>
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
            <Image
              className={styles.enlarge}
              src={InvoiceTemp1}
              alt="Option 3"
              width='100%'
              height='100%'
              priority
            />
          </label>
        </div>

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
      </div> */}
    </div>
   );
   {/* <label>
     <span>last</span>
     <input type="radio" name="test" value="big" />
     <img src="https://via.placeholder.com/40x60/b0f/fff&text=B" alt="Option 2" />
   </label> */}

   {/* <Image
     className={styles.logo}
     src="/next.svg"
     alt="Next.js Logo"
     width={180}
     height={37}
     priority
   /> */}
}
 
export default InvoiceTemplate;