import styles from "./invoiceTemplate.module.scss";
import Image from 'next/image';
import invTemp1 from '../../assets/images/invTemp1.png';
import invTemp2 from '../../assets/images/invTemp2.png';
import invTemp3 from '../../assets/images/invTemp3.png';
import invTemp4 from '../../assets/images/invTemp4.png';
import { useState } from "react";


const InvoiceTemplate = ({ changeTemplate }) => {
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
              src={invTemp1}
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
              src={invTemp2}
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
              src={invTemp3}
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
              src={invTemp4}
              alt="Template Option 4"
              priority
            />
          </label>
        </div>
      </div>
    </div>
   );
}
 
export default InvoiceTemplate;