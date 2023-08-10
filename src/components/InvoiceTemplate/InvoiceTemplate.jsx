import styles from "./invoiceTemplate.module.scss";
import Image from 'next/image';
import invTemp1 from '../../assets/images/invTemp1.png';
import invTemp2 from '../../assets/images/invTemp2.png';
import invTemp3 from '../../assets/images/invTemp3.png';
import invTemp4 from '../../assets/images/invTemp4.png';

import useTranslation from "next-translate/useTranslation";


const InvoiceTemplate = ({ template, changeTemplate }) => {
  const { t } = useTranslation('common');

  const handleChange = (e) => {
    changeTemplate(e);
  }

  return (
    <div className={styles.section}>
      <h2>{t('choose_template')}</h2>

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
              checked={template === 'template1'}
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
              checked={template === 'template2'}
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
              checked={template === 'template3'}
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
              checked={template === 'template4'}
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